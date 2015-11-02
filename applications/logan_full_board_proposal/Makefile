C=pandoc
CFLAGS=-V geometry:margin=1.5in -fmarkdown-implicit_figures
LCFLAGS=-V geometry:margin=1in -fmarkdown-implicit_figures -V geometry:landscape
FILES=logan_foundation_full_board_proposal.pdf board_list.pdf corporate_and_foundation_supporters.pdf budgets.pdf audit_report.pdf key_staff_bios.pdf attachments.pdf

all: $(FILES) composite.pdf

clean:
	rm $(FILES) composite.pdf

composite.pdf: $(FILES)
	pdftk $(FILES) cat output composite.pdf

logan_foundation_full_board_proposal.pdf: logan_foundation_full_board_proposal.md
	$(C) $(CFLAGS) logan_foundation_full_board_proposal.md -o logan_foundation_full_board_proposal.pdf

board_list.pdf: board_list.md
	$(C) $(CFLAGS) board_list.md -o board_list.pdf

corporate_and_foundation_supporters.pdf: corporate_and_foundation_supporters.md
	$(C) $(CFLAGS) corporate_and_foundation_supporters.md -o corporate_and_foundation_supporters.pdf

budgets.pdf: budgets.md budgets_full_spending.md budgets_ledger.md
	$(eval BUDGETS:=$(shell mktemp -u).pdf)
	$(eval FULL_SPENDING:=$(shell mktemp -u).pdf)
	$(eval LEDGER:=$(shell mktemp -u).pdf)
	$(C) $(LCFLAGS) budgets.md -o $(BUDGETS)
	$(C) $(CFLAGS) budgets_full_spending.md -o $(FULL_SPENDING)
	$(C) $(LCFLAGS) budgets_ledger.md -o $(LEDGER)
	pdftk $(BUDGETS) $(FULL_SPENDING) $(LEDGER) cat output budgets.pdf

audit_report.pdf: audit_report.md
	$(C) $(CFLAGS) audit_report.md -o audit_report.pdf

key_staff_bios.pdf: key_staff_bios.md img/dave_fontenot.jpg img/jonathan_leung.jpg img/max_wofford.jpg img/zach_latta.jpg
	$(C) $(CFLAGS) key_staff_bios.md -o key_staff_bios.pdf

ATTACHMENTS=attachments/amy_sorto_hello_world.pdf attachments/project_cipher_hello_world.pdf attachments/selynna_sun_hello_world.pdf attachments/selynna_sun_hs_hackers_meetup_recap.pdf attachments/tejas_manohar_hello_world.pdf attachments/harrison_shoebridge_hello_world.pdf
attachments.pdf: attachments_preface.md $(ATTACHMENTS)
	$(eval PREFACE:=$(shell mktemp -u).pdf)
	$(eval TMP:=$(shell mktemp -u).pdf)
	$(C) $(CFLAGS) attachments_preface.md -o $(PREFACE)
	pdftk $(PREFACE) $(ATTACHMENTS) cat output $(TMP)
	gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/prepress -dNOPAUSE -dQUIET -dBATCH -sOutputFile=attachments.pdf $(TMP)
