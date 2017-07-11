#!/bin/sh
#
# Hopefully this'll be replaced by a real makefile...

# Compile
pdflatex cover_letter.tex
emacs progress_report.org --batch -f org-latex-export-to-pdf --kill
pdftk cover_letter.pdf progress_report.pdf cat output full_report.pdf

# Clean up
rm cover_letter.pdf progress_report.pdf progress_report.tex *.aux *.log *.out
