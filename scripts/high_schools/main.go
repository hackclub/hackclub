package main

import (
	"encoding/csv"
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/huandu/facebook"
)

const (
	hsHackersId = 163844093817909
	teenDevId   = 210042749035068
)

type GroupMember struct {
	Id     string `facebook:"id"`
	Name   string `facebook:"name"`
	Gender string `facebook:"gender"`
}

type Member struct {
	Id        string      `facebook:"id"`
	FirstName string      `facebook:"first_name"`
	LastName  string      `facebook:"last_name"`
	Gender    string      `facebook:"gender"`
	Link      string      `facebook:"link"`
	Education []Education `facebook:"education"`
}

type Education struct {
	School School `facebook:"school"`
	Type   string `facebbok:"type"`
}

type School struct {
	Id   string `facebook:"id"`
	Name string `facebook:"name"`
}

var accessToken string

func main() {
	flag.StringVar(&accessToken, "token", "", "Facebook access token")
	flag.Parse()

	if accessToken == "" {
		log.Fatal("You must provide a Facebook access token.")
	}

	params := facebook.Params{
		"access_token": accessToken,
	}

	var groupMembers []GroupMember
	var hshackers []GroupMember
	var teendev []GroupMember
	res, err := facebook.Get(fmt.Sprintf("/%d/members", hsHackersId), params)
	if err != nil {
		log.Fatal(err)
	}
	res.DecodeField("data", &hshackers)

	res, err = facebook.Get(fmt.Sprintf("/%d/members", teenDevId), params)
	if err != nil {
		log.Fatal(err)
	}
	res.DecodeField("data", &teendev)

	groupMembers = append(groupMembers, hshackers...)
	groupMembers = append(groupMembers, teendev...)

	members := make([]Member, len(groupMembers))

	for i, m := range groupMembers {
		fmt.Printf("\rPulling student %d of %d...", i+1, len(groupMembers))

		res, err := facebook.Get(fmt.Sprintf("/%s", m.Id), params)
		if err != nil {
			log.Fatal(err)
		}
		res.Decode(&members[i])
	}
	fmt.Println()

	f, err := os.Create("schools.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	w := csv.NewWriter(f)

	w.Write([]string{"High School", "Member", "Link"})
	for _, m := range members {
		if m.Education != nil {
			var record []string

			record = append(record, m.Education[0].School.Name)
			record = append(record, m.FirstName+" "+m.LastName)
			record = append(record, m.Link)
			w.Write(record)
		}
	}
	w.Flush()

	fmt.Println("CSV successfully written to schools.csv.")
}
