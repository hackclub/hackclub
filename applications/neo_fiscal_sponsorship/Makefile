C=pandoc
CFLAGS=-V geometry:margin=1.5in -fmarkdown-implicit_figures
FILES=neo_application_processed.pdf proposal.pdf budget.pdf funders.pdf advisors.pdf key_staff.pdf monthly_expenses.pdf requested_services.pdf

all: $(FILES) composite.pdf

clean:
	rm $(FILES) composite.pdf

composite.pdf: $(FILES)
	pdftk $(FILES) cat output composite.pdf

neo_application_processed.pdf: neo_application.pdf
	# No processing needs to be done, so just make a copy with the proper output
	# name. This is just a hack to make neo_application.pdf fit into the rest of
	# our workflow.
	cp neo_application.pdf neo_application_processed.pdf

proposal.pdf: proposal.md
	$(C) $(CFLAGS) proposal.md -o proposal.pdf

budget.pdf: budget.md
	$(C) $(CFLAGS) budget.md -o budget.pdf

funders.pdf: funders.md
	$(C) $(CFLAGS) funders.md -o funders.pdf

advisors.pdf: advisors.md
	$(C) $(CFLAGS) advisors.md -o advisors.pdf

key_staff.pdf: key_staff.md
	$(C) $(CFLAGS) key_staff.md -o key_staff.pdf

monthly_expenses.pdf: monthly_expenses.md
	$(C) $(CFLAGS) monthly_expenses.md -o monthly_expenses.pdf

requested_services.pdf: requested_services.md
	$(C) $(CFLAGS) requested_services.md -o requested_services.pdf
