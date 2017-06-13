all: one_sheet.pdf

clean:
	rm one_sheet.pdf one_sheet.tex

one_sheet.pdf: one_sheet.org
	emacs one_sheet.org --batch -f org-latex-export-to-pdf --kill
