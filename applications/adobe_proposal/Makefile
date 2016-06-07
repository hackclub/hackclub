all: proposal.pdf

clean:
	rm proposal.pdf proposal.tex

proposal.pdf: proposal.org
	emacs proposal.org --batch -f org-latex-export-to-pdf --kill
