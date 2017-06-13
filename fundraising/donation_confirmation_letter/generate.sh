#!/bin/sh

tmpfile=$(mktemp /tmp/generate-donor-confirmation.XXXXXXXXXXX.tex)

cp letter.tex "$tmpfile"

printf "First name: "
read first_name

printf "Last name: "
read last_name

printf "Contribution amount: $"
read amount

printf "Contribution date: "
read date

sed -i -e "s/NAME/$first_name/" \
       -e "s/AMOUNT/$amount/" \
       -e "s/DATE/$date/" "$tmpfile"

job_name="${first_name,,}_${last_name,,}_donation_confirmation_letter"

pdflatex -jobname="$job_name" "$tmpfile"

rm *.aux *.log
rm "$tmpfile"
