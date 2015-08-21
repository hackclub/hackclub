# High Schools

Creates a CSV with a list of high schools to approach along with important
information.

Currently really hacky and needs the following improvements made:

- Take command-line arguments for various options.
- Support an arbitrarily large number of groups to search through.
- Support group member paging (Facebook starts paging at 5000 members).
- Filter for uniques.
- Logic separation into separate methods.

## Statistics

Some interesting statistics calculated using this tool:

- As of 04.20.14, 0.6% of high schools are represented in the HS Hackers and
  TeenDev Facebook groups.
  - 268 high schools represented.

## Requirements

Must have the following environment variables set:

- `FACEBOOK_ACCESS_TOKEN` - Facebook access token
