import fitz
import PyPDF2 as p2
import datetime

pdf__file = input("Enter PDF file to scan: ")
PDF_file = open(pdf__file, 'rb')
pdfread = p2.PdfFileReader(PDF_file)

file = fitz.open(pdf__file)
page = len(file)
print("""
Number of pages: """, page)


def img_extract():
    for i in range(page):
        for image in file.getPageImageList(i):
            cust_xref = image[0]
            pic = fitz.Pixmap(file, cust_xref)
            finalpic = fitz.Pixmap(fitz.csRGB, pic)
            finalpic.writePNG(str(datetime.datetime.now())+".png")
            pic = None
            finalpic = None


def txt_extract():
    getPage = pdfread.getPage(0)
    result = getPage.extractText()
    info = pdfread.getDocumentInfo()
    info_format = (""" 
____________________________________________________
                                                    
Authour: {}                                         
Application Used: {}                                
____________________________________________________ """.format(info['/Author'], info["/Creator"]))
    print(info_format)
    last_ver = result + info_format
    f = open("outputTEXT.txt", "w+")
    f.write(last_ver)


txt_extract()
img_extract()
