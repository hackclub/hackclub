# Logan Foundation Full Board Proposal

This directory houses our full board proposal to The Reva & David Logan
Foundation.

This report has a pretty standard build process with a Makefile. It expects you
to have the following dependencies installed:

- ghostscript
- pandoc
- pdftk

Run the following to compile it:

    $ make

Once that finishes, you should have `composite.pdf` built and a directory full
of the individual PDFs that make up `composite.pdf`. If you want to clean up the
build artifacts, just run the following:

    $ make clean
