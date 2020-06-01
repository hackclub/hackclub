# PDF Extractor
Extract images and text from a pdf document and save it into different files.

The code is pretty simple yet handy as it can be used in many places

Lets start

##### First the imports
```
import fitz
import PyPDF2 as p2
import datetime
```
Lets now read the document;
```
pdf__file = input("Enter PDF file to scan: ")	# prompts you to enter the name of pdf document to scan
PDF_file = open(pdf__file, 'rb')
pdfread = p2.PdfFileReader(PDF_file)

file = fitz.open(pdf__file)
page_num = len(file)
print("""
Number of pages: """, page)		# these lines count the number of pages in the document.
```

Since we have to separate tasks to perform;i.e. extract images into various files and extract text into another file; we will be defining two very simply functions to do the tasks.

```
def img_extract():
    for i in range(page_num):  	# for a value of i in the range(number of pages)
        for image in file.getPageImageList(i):	# for an image in i_th page
            cust_xref = image[0]				# makes a copy of the image
            pic = fitz.Pixmap(file, cust_xref)
            finalpic = fitz.Pixmap(fitz.csRGB, pic)
            finalpic.writePNG(str(datetime.datetime.now())+".png") # write the image into a .png; title of file:date,time 
            pic = None
            finalpic = None
```
Now to extract the text into another file:

```
def txt_extract():
    getPage = pdfread.getPage(0)	# read the contents of the page
    result = getPage.extractText()	# extract the text from the page
    info = pdfread.getDocumentInfo()	# get the information of the document (Author and Application used to create)
    info_format = (""" 
____________________________________________________
                                                    
Authour: {}                                         
Application Used: {}                                
____________________________________________________ """.format(info['/Author'], info["/Creator"]))

    print(info_format)
    last_ver = result + info_format
    f = open("outputTEXT.txt", "w+")
    f.write(last_ver)					# open and write the text in the documents into a textfile
```

Thats it...like seriously you created a python program that can read pdfs and extract images and text from it.🎉

But don't stop here keep trying out new stuff and improve 🎉🎉🎉

###### I have added the complete code to a file named "pdf_img_ext.py", I have also provided a pdf file to work on "EXAMPLE.pdf", also I have added what the output should look like if you use the same pdf file.
