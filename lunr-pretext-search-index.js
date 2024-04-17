var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Devinh  github.com\/VinhPhmCng   vinhpcdev@gmail.com        copyright 2024 Phạm Công Vinh  Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled GNU Free Documentation License .   "
},
{
  "id": "sec-introduction",
  "level": "1",
  "url": "sec-introduction.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   Welcome my friend! This is an article on programming and its most fundamental concepts , as you can see in the Table of Contents to your left. The knowledge is designed to be as beginner-friendly as possible, making each section a 5 to 10-minute read.   Links Youtube series This article is also adapted into videos, which are available on Youtube and also embedded into the corresponding section. This way, whether you are a visual or auditory learner, or both, you can find the most comfortable way to enjoy this tutorial. (P.S. The videos are short and quite silly because I'm new to editing.)  That's it! Going forward I hope I can give you a good first impression of the wonderful world of programming. Despite the title, I hope this article will be useful and entertaining to both complete novices and those who've had minimal contact with programming.    How To Follow Along  Overviews   Overviews of contents An overview of the contents:   Sections 1 and 2 : An introduction to the article.   Sections 3 to 10 : Fundamental concepts of programming.   Sections 11 and 12 : My personal experiences.    Sections 13 to 19 (under development, tentative) : Slightly more advanced fundamental concepts.     New concepts will be introduced with the following structure:  Definition  Code examples  Explanations for examples  When running code examples , you should simultaneously read the corresponding explanations for the best learning experience.  You can also watch the videos, before or after reading each section. They have cool visuals and present ideas in a different way.  Available languages can be found in .    Support This Project  Support   Links source code This is an open-source project, meaning its source code is available on Github here .   Support directly  Links contributing Readers can make a free Github account and give feedback and suggestions directly. If you're a programmer and would like to support your community by translating this article into your language, then that's possible as well. Refer to Contributing for more details. (P.S. I'd really appreciate it if someone could improve my writing. It sucks ass.)   Support the tools used This page is built with PreTeXt . Please support them as well!   Support the videos  Links tools used Enjoying the Youtube series is not only an effective way to learn, but also a great way of supporting the project. More details on the tools and resources used to create the videos can be found here .   Support by donating  Links donation And if you really appreciate the contents, consider leaving a donation here . Thanks a bunch!  OK then, let's gooo!    What Is Programming?  Definitions of programming       Basic Programming Part 1: Introduction  Videos part 01     "
},
{
  "id": "sec-introduction-2-1",
  "level": "2",
  "url": "sec-introduction.html#sec-introduction-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "programming fundamental concepts "
},
{
  "id": "subsec-how-to-follow-along-3",
  "level": "2",
  "url": "sec-introduction.html#subsec-how-to-follow-along-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sections 1 and 2 Sections 3 to 10 Sections 11 and 12 Sections 13 to 19 (under development, tentative) "
},
{
  "id": "subsec-how-to-follow-along-4",
  "level": "2",
  "url": "sec-introduction.html#subsec-how-to-follow-along-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simultaneously "
},
{
  "id": "subsec-what-is-programming-4",
  "level": "2",
  "url": "sec-introduction.html#subsec-what-is-programming-4",
  "type": "Video",
  "number": "1.1",
  "title": "Basic Programming — Part 1: Introduction.",
  "body": " Basic Programming Part 1: Introduction  Videos part 01   "
},
{
  "id": "sec-pro-environment",
  "level": "1",
  "url": "sec-pro-environment.html",
  "type": "Section",
  "number": "2",
  "title": "Our Programming Environment",
  "body": " Our Programming Environment  Programming environments    Learn to use the basic components of our programming environment.    To code, you need a suitable working environment. Programmers would most likely not code in Word the text editor, would they? Instead, they'd use a code editor and compiler .   Programming environments version 1 In the online version of the article, our code editor and compiler is as follows:   Try It Out    Run the code.  Change the code however you'd like and run it again.       8    Code examples programming environment 1  Functions print()   The command print() has a simple job putting data, which is located in between the parentheses, into the terminal. Here, that data is the outcome of a + b .    Overviews of programming environment The environment above has these components:    Cell \/ Editor Where code is written. In the online version, you can modify and experiment with the code.     Run Code Button (Online) Press to execute the code.     Terminal (Online) Where output and errors, if any, are shown when running the code.     Output Where static output is shown. It's mostly intended for the hard copy or PDF, but online users can also benefit, for example, when code servers are down for some reason.     Explanation Where an explanation for the code example is given.      Programming environments version 2 A slightly different version of the code cell is as follows:   a = 3 b = 5 print(a + b)    8    Code examples programming environment 2  Same as above.   This runs similarly, but it also provides additional functionality. The slider allows you to work on code through repeated edit-compile-test cycles. There is also a CodeLens button, which activates a steppable program similar to a debugger, meaning you can watch output, variables, and other data change line by line (or statement by statement).  Actually, it has another minor advantage. Refer to if you're interested.   Insights which programming environment  Depending on the concept, the better-suited version to demonstrate it is chosen.    Topic(s) you might be interested in:      Links 2023 survey on popular IDE  stackoverflow's 2023 survey on the most popular IDE        Notes on updating code  If you update the code in a cell and re-run it, new output will be shown only in the terminal. The static output section retains the outcomes of the original code.   In this article, our environment is limited to those components for the sake of simplicity . Sophisticated environments have many more features helping experienced programmers to create, but for beginners they are unnecessary. Besides, their installation can be quite complicated, thus discouraging you from actually learning programming.  All provided code examples can be run directly or copy-pasted and run in code cells provided in the . They can also be compiled and run in external coding environments, but this article will not instruct you in that.   Notes on continuation code  Code cells can be a continuation of previous cell(s). This feature helps make some examples shorter and their explanations easier to follow.    Conventions of continuation code  If a code cell extends another, its first line is as follows:     -2    Code examples continuation code   Why does a - b result in -2 ? If you take another look at the first cell, you can see that a = 3 and b = 5 . So, this cell is a continuation of the first one.    Notes on unexpected results  If you run a cell starting with # ... and unexpected results or errors show up, then it's likely you haven't run the preceding cell(s).        Basic Programming Part 2: Our Programming Environment  Videos part 02    "
},
{
  "id": "sec-pro-environment-3",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-3",
  "type": "Objectives",
  "number": "2",
  "title": "",
  "body": "  Learn to use the basic components of our programming environment.   "
},
{
  "id": "sec-pro-environment-4",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "code editor and compiler "
},
{
  "id": "sec-pro-environment-8",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-8",
  "type": "Output",
  "number": "2.1",
  "title": "",
  "body": " 8  "
},
{
  "id": "sec-pro-environment-9",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-9",
  "type": "Explanation",
  "number": "2.1",
  "title": "",
  "body": " Code examples programming environment 1  Functions print()   The command print() has a simple job putting data, which is located in between the parentheses, into the terminal. Here, that data is the outcome of a + b .  "
},
{
  "id": "sec-pro-environment-10",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cell \/ Editor Run Code Button Terminal Output static Explanation "
},
{
  "id": "sec-pro-environment-13",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-13",
  "type": "Output",
  "number": "2.2",
  "title": "",
  "body": " 8  "
},
{
  "id": "sec-pro-environment-14",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-14",
  "type": "Explanation",
  "number": "2.2",
  "title": "",
  "body": " Code examples programming environment 2  Same as above.  "
},
{
  "id": "sec-pro-environment-17",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-17",
  "type": "Insight",
  "number": "2.3",
  "title": "",
  "body": " Insights which programming environment  Depending on the concept, the better-suited version to demonstrate it is chosen.  "
},
{
  "id": "sec-pro-environment-19",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-19",
  "type": "Note",
  "number": "2.4",
  "title": "",
  "body": " Notes on updating code  If you update the code in a cell and re-run it, new output will be shown only in the terminal. The static output section retains the outcomes of the original code.  "
},
{
  "id": "sec-pro-environment-20",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simplicity "
},
{
  "id": "sec-pro-environment-22",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-22",
  "type": "Note",
  "number": "2.5",
  "title": "",
  "body": " Notes on continuation code  Code cells can be a continuation of previous cell(s). This feature helps make some examples shorter and their explanations easier to follow.  "
},
{
  "id": "sec-pro-environment-23",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-23",
  "type": "Convention",
  "number": "2.6",
  "title": "",
  "body": " Conventions of continuation code  If a code cell extends another, its first line is as follows:  "
},
{
  "id": "sec-pro-environment-25",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-25",
  "type": "Output",
  "number": "2.7",
  "title": "",
  "body": " -2  "
},
{
  "id": "sec-pro-environment-26",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-26",
  "type": "Explanation",
  "number": "2.3",
  "title": "",
  "body": " Code examples continuation code   Why does a - b result in -2 ? If you take another look at the first cell, you can see that a = 3 and b = 5 . So, this cell is a continuation of the first one.  "
},
{
  "id": "sec-pro-environment-27",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-27",
  "type": "Note",
  "number": "2.8",
  "title": "",
  "body": " Notes on unexpected results  If you run a cell starting with # ... and unexpected results or errors show up, then it's likely you haven't run the preceding cell(s).  "
},
{
  "id": "sec-pro-environment-29",
  "level": "2",
  "url": "sec-pro-environment.html#sec-pro-environment-29",
  "type": "Video",
  "number": "2.4",
  "title": "Basic Programming — Part 2: Our Programming Environment.",
  "body": " Basic Programming Part 2: Our Programming Environment  Videos part 02   "
},
{
  "id": "sec-pro-language",
  "level": "1",
  "url": "sec-pro-language.html",
  "type": "Section",
  "number": "3",
  "title": "Programming Languages",
  "body": " Programming Languages    See some examples of different programming languages.  Learn about high-level and low-level languages.     Definitions of programming languages    A programming language is a system of notation that helps humans create computer programs.  Each programming language has its own set of syntax .   Syntax is simply the grammar of a programming language, which is crucial for the computer to understand and execute code.    The code cell below is written in Python one of the most popular programming languages in recent years. You can run the code and see the results.    Hello World!    Code examples high-level  Functions print()   The command print() simply puts data into the terminal. In this case, it's the words Hello World! .    Code examples high-level Here is another code block written in Python. (You don't have to understand what the code is doing, though it's easy to guess.)   Try It Out  Copy and paste the code into a code cell and run it.    a = 0 while a < 10: print(a, end=\" \") if a % 2 == 0: print(\"is even\") else: print(\"is odd\") a += 1   You can easily see that there are keywords such as while , print  end , if , and else . Besides those, Python's syntax includes many keywords and features that closely resemble the English language.   Definitions of high-level languages   Python is considered a high-level programming language because its syntax closely resembles English.    Therefore, Python is usually recommended to beginners, which is also why it is one of the most well-known programming languages.   Code examples low-level The following example is written in Assembly . When compiled it also outputs the words Hello World! . (Again, don't try to understand the code. This one is beyond even me.)   Try It Out  Here's an Assembly compiler if you want to see it run.    section .data hello: db 'Hello World!',10 helloLen: equ $-hello section .text global _start _start: mov eax,4 mov ebx,1 mov ecx,hello mov edx,helloLen int 80h mov eax,1 mov ebx,0 int 80h;   As you can see, this is very close to computer language. And Assembly needs 14 lines of code to do what Python can do with one.   Definitions of low-level languages   Assembly is considered a low-level programming language since its syntax is closer to machine code.    In conclusion, the syntax of high-level languages is easier to understand than that of low-level ones. Maybe you'd ask Then why should we use low-level languages?   There're many reasons for that, and among them, speed is the most obvious. Basically, code written in high-level languages has to go through more intermediate steps to be translated into machine code (binary) than low-level ones, thus it's obvious that the latter often have a speed advantage.  Some other reasons are specialization, precise data manipulation, legacy systems,    Insights high- vs low-level  You can imagine a high-level programming language as a 4-seat family car, which is user-friendly and can be driven by most people. Then, a low-level one would be an F1 racing car that only the most skillful professionals can drive.  And in return, the low-level F1 racing car will be significantly faster than the high-level family car.   However, for beginner-level usage, this speed advantage doesn't really matter. So, for you, high-level languages are definitely the way to go.   Notes on code examples  In this article, code examples are written in Python , making it easier for you to follow and experiment.  But you can also play with other programming languages in the .    Topic(s) you might be interested in:      Links 2023 survey on popular languages  stackoverflow's 2023 survey on the most popular languages       A language's syntax is developed in consideration of its purpose(s) . For instance, Guido van Rossum greatly prioritized readability and ease of use when he created Python. Therefore, its syntax aims to enable developers to write clear and expressive code.   Choosing A Programming Language  Insights choosing a language  When getting started with programming, a beginner often comes across certain topics on the Internet:   Which programming language should I start with?    Which programming language should I learn in 2024?    Which programming language to learn for high-paying jobs?      I think these are impractical questions, and I would advise you against that mindset. Instead, you should ask questions such as:   What is my purpose in learning a new programming language?    For that purpose, which programming language is suitable?    For that purpose and considering my current level, do I want to learn a high-level or low-level language?      There's an ever-growing number of programming languages, and each of them has its own purposes, pros, and cons .        Basic Programming Part 3: Programming Languages  Videos part 03  Coming soon.    "
},
{
  "id": "sec-pro-language-2",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-2",
  "type": "Objectives",
  "number": "3",
  "title": "",
  "body": "  See some examples of different programming languages.  Learn about high-level and low-level languages.   "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-pro-language.html#def-",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": " Definitions of programming languages    A programming language is a system of notation that helps humans create computer programs.  Each programming language has its own set of syntax .   Syntax is simply the grammar of a programming language, which is crucial for the computer to understand and execute code.   "
},
{
  "id": "sec-pro-language-4",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Python "
},
{
  "id": "sec-pro-language-6",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-6",
  "type": "Output",
  "number": "3.2",
  "title": "",
  "body": " Hello World!  "
},
{
  "id": "sec-pro-language-7",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-7",
  "type": "Explanation",
  "number": "3.1",
  "title": "",
  "body": " Code examples high-level  Functions print()   The command print() simply puts data into the terminal. In this case, it's the words Hello World! .  "
},
{
  "id": "sec-pro-language-11",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "keywords "
},
{
  "id": "def-prolang-high-level",
  "level": "2",
  "url": "sec-pro-language.html#def-prolang-high-level",
  "type": "Definition",
  "number": "3.3",
  "title": "",
  "body": " Definitions of high-level languages   Python is considered a high-level programming language because its syntax closely resembles English.   "
},
{
  "id": "sec-pro-language-14",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Assembly "
},
{
  "id": "def-prolang-low-level",
  "level": "2",
  "url": "sec-pro-language.html#def-prolang-low-level",
  "type": "Definition",
  "number": "3.4",
  "title": "",
  "body": " Definitions of low-level languages   Assembly is considered a low-level programming language since its syntax is closer to machine code.   "
},
{
  "id": "sec-pro-language-22",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-22",
  "type": "Insight",
  "number": "3.5",
  "title": "",
  "body": " Insights high- vs low-level  You can imagine a high-level programming language as a 4-seat family car, which is user-friendly and can be driven by most people. Then, a low-level one would be an F1 racing car that only the most skillful professionals can drive.  And in return, the low-level F1 racing car will be significantly faster than the high-level family car.  "
},
{
  "id": "sec-pro-language-23",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "beginner-level "
},
{
  "id": "sec-pro-language-24",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-24",
  "type": "Note",
  "number": "3.6",
  "title": "",
  "body": " Notes on code examples  In this article, code examples are written in Python , making it easier for you to follow and experiment.  But you can also play with other programming languages in the .  "
},
{
  "id": "sec-pro-language-26",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "purpose(s) "
},
{
  "id": "insight-choose-pro-language",
  "level": "2",
  "url": "sec-pro-language.html#insight-choose-pro-language",
  "type": "Insight",
  "number": "3.7",
  "title": "Choosing A Programming Language.",
  "body": " Choosing A Programming Language  Insights choosing a language  When getting started with programming, a beginner often comes across certain topics on the Internet:   Which programming language should I start with?    Which programming language should I learn in 2024?    Which programming language to learn for high-paying jobs?      I think these are impractical questions, and I would advise you against that mindset. Instead, you should ask questions such as:   What is my purpose in learning a new programming language?    For that purpose, which programming language is suitable?    For that purpose and considering my current level, do I want to learn a high-level or low-level language?      There's an ever-growing number of programming languages, and each of them has its own purposes, pros, and cons .  "
},
{
  "id": "sec-pro-language-29",
  "level": "2",
  "url": "sec-pro-language.html#sec-pro-language-29",
  "type": "Video",
  "number": "3.2",
  "title": "Basic Programming — Part 3: Programming Languages.",
  "body": " Basic Programming Part 3: Programming Languages  Videos part 03  Coming soon.   "
},
{
  "id": "sec-comment",
  "level": "1",
  "url": "sec-comment.html",
  "type": "Section",
  "number": "4",
  "title": "Comments",
  "body": " Comments    Learn to recognize and use comments in code.    When coding, sometimes you want to write plain text instead of code. It can be notes, explanations for algorithms, or your stream of thoughts at that moment, As the code expands and gets more complicated, these comments provide you with sufficient context.   Definitions of comments    Comments are pieces of plain text that will not be executed.  To write a comment in Python, use the number sign (hash) # . What follows it (on the same line) will be regarded as plain text by the compiler.     Topic(s) you might be interested in:      Links different comment syntax  \"comments in different programming languages\"      Links multiline comments  \"multiline comments\"        Insights disabling code  Comments are also used to temporarily disable lines of code.   For example:    Try It Out  Try removing the # in line 5 and re-run the code.    This is code More code    Code examples comments   Line 1 is a comment used to leave notes.  Lines 3 and 7 are normal code.  Line 5 is a comment used to disable code.        Basic Programming Part 4: Comments  Videos part 04    "
},
{
  "id": "sec-comment-2",
  "level": "2",
  "url": "sec-comment.html#sec-comment-2",
  "type": "Objectives",
  "number": "4",
  "title": "",
  "body": "  Learn to recognize and use comments in code.   "
},
{
  "id": "sec-comment-3",
  "level": "2",
  "url": "sec-comment.html#sec-comment-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "plain text "
},
{
  "id": "def-comment",
  "level": "2",
  "url": "sec-comment.html#def-comment",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": " Definitions of comments    Comments are pieces of plain text that will not be executed.  To write a comment in Python, use the number sign (hash) # . What follows it (on the same line) will be regarded as plain text by the compiler.   "
},
{
  "id": "sec-comment-6",
  "level": "2",
  "url": "sec-comment.html#sec-comment-6",
  "type": "Insight",
  "number": "4.2",
  "title": "",
  "body": " Insights disabling code  Comments are also used to temporarily disable lines of code.  "
},
{
  "id": "sec-comment-10",
  "level": "2",
  "url": "sec-comment.html#sec-comment-10",
  "type": "Output",
  "number": "4.3",
  "title": "",
  "body": " This is code More code  "
},
{
  "id": "sec-comment-11",
  "level": "2",
  "url": "sec-comment.html#sec-comment-11",
  "type": "Explanation",
  "number": "4.1",
  "title": "",
  "body": " Code examples comments   Line 1 is a comment used to leave notes.  Lines 3 and 7 are normal code.  Line 5 is a comment used to disable code.  "
},
{
  "id": "sec-comment-13",
  "level": "2",
  "url": "sec-comment.html#sec-comment-13",
  "type": "Video",
  "number": "4.2",
  "title": "Basic Programming — Part 4: Comments.",
  "body": " Basic Programming Part 4: Comments  Videos part 04   "
},
{
  "id": "sec-variable",
  "level": "1",
  "url": "sec-variable.html",
  "type": "Section",
  "number": "5",
  "title": "Variables",
  "body": " Variables    Learn about variables and how to use them.  Understand how the equal sign = isn't associated with equality in programming.     Variables are one of the most fundamental concepts in programming.  In mathematics, we often see the variable in functions such as: Here variable means can be changed and is not fixed.   Definitions of variables   In programming, variables are used to store data.  The data stored inside a variable is called value , which is often updated as new data needs to be stored.  To declare a variable is to create a new variable.  To assign data to an existing variable is to update its value to that data.     Declaring and assigning  Syntax of declaration  Syntax of assignment  In Python, to declare or assign values to a variable, we use the equal sign = :   Therefore, the equal sign = in programming should never be used for equality.   For example (using CodeLens is recommended):   a = 1 b = a print(a) print(b) # Update variable a = 2 print(a) print(b)    1 1 2 1    Code examples declaration  Code examples assignment   Firstly, we declare the variable a and assign it the value 1 .  Next, we declare and assign b the current value of a , thus b also has the value 1 .  We then use the command print() to access and display their current values in the terminal.  Next, we assign a a new value of 2 , but we do not touch b .   Try It Out  If after updating a , we want b to again have the same value as a , then we have to update b accordingly.    Notes on equality  Note : If at this step you think that the values of a and b should both be 2 , then you are still associating = with equality, which is not the case for programming.  Finally, we use print() again to see the difference.    Insights equality  The above example, though simple, confuses many beginners, especially those with a mathematical brain. Because they see b = a , they think it's an equality that holds true throughout the program's lifecycle. That mindset does not apply to programming.    Naming a variable  Notes on variable names  Conventions of variable names   Topic(s) you might be interested in:      Links legal variable names  \"what variable names are allowed in Python\"      Links Python naming conventions  \"variable naming conventions in Python\"       A variable's name has some specifications. The following names will raise a syntax error:   my var = 5 (contains white-spaces)   #my_var = 5 (contains a special character)   1st_var = 5 (starts with a number)   print = 5 (matches a reserved keyword)    Avoid those, and you can name a variable whatever you'd like. That's why, depending on the individual, variable names can vary.  house_address  houseAddress  HouseAddress  ha  hAddress  house_add       In the world of programming, there are different conventions for naming a variable.  It's a skill to know how to name a variable appropriately, but this article will not instruct you in that. Variables in our code examples are named in a short and simple fashion.        Basic Programming Part 5: Variables  Videos part 05  Coming soon.    "
},
{
  "id": "sec-variable-2",
  "level": "2",
  "url": "sec-variable.html#sec-variable-2",
  "type": "Objectives",
  "number": "5",
  "title": "",
  "body": "  Learn about variables and how to use them.  Understand how the equal sign = isn't associated with equality in programming.   "
},
{
  "id": "sec-variable-3",
  "level": "2",
  "url": "sec-variable.html#sec-variable-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Variables "
},
{
  "id": "def-variable",
  "level": "2",
  "url": "sec-variable.html#def-variable",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": " Definitions of variables   In programming, variables are used to store data.  The data stored inside a variable is called value , which is often updated as new data needs to be stored.  To declare a variable is to create a new variable.  To assign data to an existing variable is to update its value to that data.   "
},
{
  "id": "sec-variable-6",
  "level": "2",
  "url": "sec-variable.html#sec-variable-6",
  "type": "Syntax",
  "number": "5.2",
  "title": "Declaring and assigning.",
  "body": " Declaring and assigning  Syntax of declaration  Syntax of assignment  In Python, to declare or assign values to a variable, we use the equal sign = :   Therefore, the equal sign = in programming should never be used for equality.  "
},
{
  "id": "sec-variable-9",
  "level": "2",
  "url": "sec-variable.html#sec-variable-9",
  "type": "Output",
  "number": "5.3",
  "title": "",
  "body": " 1 1 2 1  "
},
{
  "id": "sec-variable-10",
  "level": "2",
  "url": "sec-variable.html#sec-variable-10",
  "type": "Explanation",
  "number": "5.1",
  "title": "",
  "body": " Code examples declaration  Code examples assignment   Firstly, we declare the variable a and assign it the value 1 .  Next, we declare and assign b the current value of a , thus b also has the value 1 .  We then use the command print() to access and display their current values in the terminal.  Next, we assign a a new value of 2 , but we do not touch b .   Try It Out  If after updating a , we want b to again have the same value as a , then we have to update b accordingly.    Notes on equality  Note : If at this step you think that the values of a and b should both be 2 , then you are still associating = with equality, which is not the case for programming.  Finally, we use print() again to see the difference.  "
},
{
  "id": "sec-variable-11",
  "level": "2",
  "url": "sec-variable.html#sec-variable-11",
  "type": "Insight",
  "number": "5.4",
  "title": "",
  "body": " Insights equality  The above example, though simple, confuses many beginners, especially those with a mathematical brain. Because they see b = a , they think it's an equality that holds true throughout the program's lifecycle. That mindset does not apply to programming.  "
},
{
  "id": "sec-variable-12",
  "level": "2",
  "url": "sec-variable.html#sec-variable-12",
  "type": "Note",
  "number": "5.5",
  "title": "Naming a variable.",
  "body": " Naming a variable  Notes on variable names  Conventions of variable names   Topic(s) you might be interested in:      Links legal variable names  \"what variable names are allowed in Python\"      Links Python naming conventions  \"variable naming conventions in Python\"       A variable's name has some specifications. The following names will raise a syntax error:   my var = 5 (contains white-spaces)   #my_var = 5 (contains a special character)   1st_var = 5 (starts with a number)   print = 5 (matches a reserved keyword)    Avoid those, and you can name a variable whatever you'd like. That's why, depending on the individual, variable names can vary.  house_address  houseAddress  HouseAddress  ha  hAddress  house_add       In the world of programming, there are different conventions for naming a variable.  It's a skill to know how to name a variable appropriately, but this article will not instruct you in that. Variables in our code examples are named in a short and simple fashion.  "
},
{
  "id": "sec-variable-14",
  "level": "2",
  "url": "sec-variable.html#sec-variable-14",
  "type": "Video",
  "number": "5.2",
  "title": "Basic Programming — Part 5: Variables.",
  "body": " Basic Programming Part 5: Variables  Videos part 05  Coming soon.   "
},
{
  "id": "sec-data-type",
  "level": "1",
  "url": "sec-data-type.html",
  "type": "Section",
  "number": "6",
  "title": "Data Types",
  "body": " Data Types    Learn about data types and how to use them.  Understand interactions between data types.    Pretty much everything in existence can be stored as data from numbers and letters to information about a car model.   Definitions of data types   And to categorize data, we make use of data types .     Overviews of data types Most modern programming languages have the following data types:   str   A sequence of characters , enclosed in quotation marks \"\" or single quotation marks '' .    int   An integer , or a whole number (without a decimal point).    float   A floating-point number (with a decimal point).    bool   A Boolean value , which can only equate to either True or False . It's frequently used in conditional statements.      Topic(s) you might be interested in      Links Python is dynamically typed  \"Python is dynamically typed\"        Links static vs dynamic typing  example of static vs dynamic typing        Notes on data type determination  Python is a dynamically typed language. This means when a variable is declared or updated, its data type is automatically determined or re-determined respectively.   For example (it's recommended to use CodeLens):   a = 5 b = type(a) print(a, b) a = \"5\" b = type(a) print(a, b)    5 <class 'int'> 5 <class 'str'>    Code examples data types  Functions type()   The command type(a) returns the data type of a written in single quotation marks.  (You don't have to care about the word class yet. Here it can be understood as classify . But to be accurate, it's refering to Class , which is a more advanced topic discussed in .)   Try It Out  Is 5 different from 5.0 ?   So, when we declare a = 5 , the variable a is of type int .  But when we assign a the value \"5\" , it automatically updates to str .   To conclude, a = \"5\" differs from a = 5 . If data is surrounded by (single) quotation marks, then it is of type str . From that, we have the following:   Definitions of data type syntax   Different data types have different syntax .    Some examples of the main data types:    <class 'int'> <class 'float'> <class 'str'> <class 'bool'>    Code examples data types   Same as above.  Again, you don't have to care about class yet.   Next, we have:   Definitions of data interactions   Data types determine possible interactions between data.  In other words, there are many possible interactions between data (mathematical calculations, string concatenation, ), and what they are depends on the data type(s) involved.    For example:    3 9.1 8.5    Code examples data interactions   We know both a and b are of type int . So, adding them together makes sense and is allowed.  Similarly, c and d are both float , so addition is valid.  The last line is a bit more interesting since we can still perform an addition between int and float .   We can also add two or more strings together, resulting in a new string that is the concatenation of the component strings. For example:    HelloJack Hello Jane    Code examples string concatenation    s1 + s2 is valid and concatenates the strings, same with s1 + s3 .  Notice the difference between s2 and s3 and how it's reflected in the concatenated strings.   However, we cannot add int and str together, which will result in an error :   Topic(s) you might be interested in      Links Python add int to string  \"Python how to add int to string\"         TypeError Cell In [1], line 3 ... TypeError: unsupported operand type(s) for +: 'int' and 'str'    Code examples invalid data interactions   The operator + is an invalid interaction between int và str .        Basic Programming Part 6: Data Types  Videos part 06  Coming soon.    "
},
{
  "id": "sec-data-type-2",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-2",
  "type": "Objectives",
  "number": "6",
  "title": "",
  "body": "  Learn about data types and how to use them.  Understand interactions between data types.   "
},
{
  "id": "def-data-type",
  "level": "2",
  "url": "sec-data-type.html#def-data-type",
  "type": "Definition",
  "number": "6.1",
  "title": "",
  "body": " Definitions of data types   And to categorize data, we make use of data types .   "
},
{
  "id": "sec-data-type-5",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "A sequence of characters An integer A floating-point number A Boolean value "
},
{
  "id": "sec-data-type-7",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-7",
  "type": "Note",
  "number": "6.2",
  "title": "",
  "body": " Notes on data type determination  Python is a dynamically typed language. This means when a variable is declared or updated, its data type is automatically determined or re-determined respectively.  "
},
{
  "id": "sec-data-type-10",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-10",
  "type": "Output",
  "number": "6.3",
  "title": "",
  "body": " 5 <class 'int'> 5 <class 'str'>  "
},
{
  "id": "sec-data-type-11",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-11",
  "type": "Explanation",
  "number": "6.1",
  "title": "",
  "body": " Code examples data types  Functions type()   The command type(a) returns the data type of a written in single quotation marks.  (You don't have to care about the word class yet. Here it can be understood as classify . But to be accurate, it's refering to Class , which is a more advanced topic discussed in .)   Try It Out  Is 5 different from 5.0 ?   So, when we declare a = 5 , the variable a is of type int .  But when we assign a the value \"5\" , it automatically updates to str .  "
},
{
  "id": "def-dtype-syntax",
  "level": "2",
  "url": "sec-data-type.html#def-dtype-syntax",
  "type": "Definition",
  "number": "6.4",
  "title": "",
  "body": " Definitions of data type syntax   Different data types have different syntax .   "
},
{
  "id": "sec-data-type-16",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-16",
  "type": "Output",
  "number": "6.5",
  "title": "",
  "body": " <class 'int'> <class 'float'> <class 'str'> <class 'bool'>  "
},
{
  "id": "sec-data-type-17",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-17",
  "type": "Explanation",
  "number": "6.2",
  "title": "",
  "body": " Code examples data types   Same as above.  Again, you don't have to care about class yet.  "
},
{
  "id": "def-dtype-interaction",
  "level": "2",
  "url": "sec-data-type.html#def-dtype-interaction",
  "type": "Definition",
  "number": "6.6",
  "title": "",
  "body": " Definitions of data interactions   Data types determine possible interactions between data.  In other words, there are many possible interactions between data (mathematical calculations, string concatenation, ), and what they are depends on the data type(s) involved.   "
},
{
  "id": "sec-data-type-22",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-22",
  "type": "Output",
  "number": "6.7",
  "title": "",
  "body": " 3 9.1 8.5  "
},
{
  "id": "sec-data-type-23",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-23",
  "type": "Explanation",
  "number": "6.3",
  "title": "",
  "body": " Code examples data interactions   We know both a and b are of type int . So, adding them together makes sense and is allowed.  Similarly, c and d are both float , so addition is valid.  The last line is a bit more interesting since we can still perform an addition between int and float .  "
},
{
  "id": "sec-data-type-26",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-26",
  "type": "Output",
  "number": "6.8",
  "title": "",
  "body": " HelloJack Hello Jane  "
},
{
  "id": "sec-data-type-27",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-27",
  "type": "Explanation",
  "number": "6.4",
  "title": "",
  "body": " Code examples string concatenation    s1 + s2 is valid and concatenates the strings, same with s1 + s3 .  Notice the difference between s2 and s3 and how it's reflected in the concatenated strings.  "
},
{
  "id": "sec-data-type-28",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "error "
},
{
  "id": "sec-data-type-31",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-31",
  "type": "Output",
  "number": "6.9",
  "title": "",
  "body": " TypeError Cell In [1], line 3 ... TypeError: unsupported operand type(s) for +: 'int' and 'str'  "
},
{
  "id": "sec-data-type-32",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-32",
  "type": "Explanation",
  "number": "6.5",
  "title": "",
  "body": " Code examples invalid data interactions   The operator + is an invalid interaction between int và str .  "
},
{
  "id": "sec-data-type-34",
  "level": "2",
  "url": "sec-data-type.html#sec-data-type-34",
  "type": "Video",
  "number": "6.6",
  "title": "Basic Programming — Part 6: Data Types.",
  "body": " Basic Programming Part 6: Data Types  Videos part 06  Coming soon.   "
},
{
  "id": "sec-data-structure",
  "level": "1",
  "url": "sec-data-structure.html",
  "type": "Section",
  "number": "7",
  "title": "Data Structures",
  "body": " Data Structures    Learn about data structures.  See two examples lists and dictionaries .      Code examples without list Up until now, variables have been storing one singular value. Suppose we have a program that stores 100 perfect square numbers. It might look like this:   ps1 = 0 ps2 = 1 ps3 = 4 ps4 = 9 # ... ps100 = 9801   This is highly impractical. So, to reduce the number of variables, we can make use of a new object a data structure .   Definitions of data structures    A data structure is a special data that acts as a storage for multiple other pieces of data.  Each piece of sub-data stored by a data structure is called an element .  Data structures are built on top of data types, meaning concepts in can be applied to them.     Code examples with list Then, we can re-implement our program as follows:   ps = [0, 1, 4, 9, ..., 9801]   Even though this is still impractical (we're typing 100 numbers), it's significantly better than before. Instead of creating 100 different variables, we create just one that holds 100 values. (This is a list , which is discussed below.)  Every programming language has its own set of built-in data structures, all of which are different in some way and have their pros and cons.  For now, we will take a look at two of the most used data structures lists (arrays) and dictionaries .   Notes on learning data structures  The following sub-sections will only briefly introduce these two objects.      Lists (Arrays)   Definitions of lists   A list can store multiple values at once.  Elements of a Pythonic list can be of different data types.     Topic(s) you might be interested in      Links Python lists vs arrays  \"Python lists vs arrays\"        Notes on lists vs arrays  In some other programming languages, there's a data structure called array , which works the same as a list in Python.  Python also has arrays, though with a different implementation from some others'. This goes to show that in different languages, data structures can have the same name but different implementations, and vice versa.  Generally, the term array is more well-known than list .   For example:   Try It Out  Try adding more elements to the lists.     [1 2 3] <class 'list'> [1 2.5 3] <class 'list'> [1 'test' 3] <class 'list'>    Code examples using lists   We declare 3 lists, each of which has 3 elements.  The elements of l1 are all integers.  The list l2 stores two integers and a float.  The list l3 has two integers and a string.  The command type() lets us know their data type is list .    Notes on using lists  As you can already see, lists have yet another distinct syntax. But we won't go into their syntax and usage yet. Refer to for further discussion about lists.     Dictionaries   Definitions of dictionaries   A dictionary can store multiple pairs of key:value .  It's often used to store descriptive information.    For example:   Try It Out  Try adding more information about Steve.     {'name': 'Steve', 'gender': 'male', 'dob': 1980, 'hobbies': ['apples', 'swimming', 'programming'], 5: 'random'} <class 'dict'>    Code examples using a dictionary   We declare a dictionary with 5 elements which are pairs of key:value.  As you can see, the keys and values can have different data types.  The command type() lets us know its data type is dict .    Notes on using dictionaries  Dictionaries have yet another distinct syntax. Again, we won't go into their syntax and usage yet. Refer to for further discussion about dictionaries.          Basic Programming Part 7: Data Structures  Videos part 07  Coming soon.     "
},
{
  "id": "sec-data-structure-2",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-2",
  "type": "Objectives",
  "number": "7",
  "title": "",
  "body": "  Learn about data structures.  See two examples lists and dictionaries .   "
},
{
  "id": "sec-data-structure-3-3",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "a data structure "
},
{
  "id": "def-data-structure",
  "level": "2",
  "url": "sec-data-structure.html#def-data-structure",
  "type": "Definition",
  "number": "7.1",
  "title": "",
  "body": " Definitions of data structures    A data structure is a special data that acts as a storage for multiple other pieces of data.  Each piece of sub-data stored by a data structure is called an element .  Data structures are built on top of data types, meaning concepts in can be applied to them.   "
},
{
  "id": "sec-data-structure-3-7",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "list "
},
{
  "id": "sec-data-structure-3-9",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-3-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lists (arrays) dictionaries "
},
{
  "id": "sec-data-structure-3-10",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-3-10",
  "type": "Note",
  "number": "7.2",
  "title": "",
  "body": " Notes on learning data structures  The following sub-sections will only briefly introduce these two objects.   "
},
{
  "id": "def-list",
  "level": "2",
  "url": "sec-data-structure.html#def-list",
  "type": "Definition",
  "number": "7.3",
  "title": "",
  "body": " Definitions of lists   A list can store multiple values at once.  Elements of a Pythonic list can be of different data types.   "
},
{
  "id": "subsec-list-4",
  "level": "2",
  "url": "sec-data-structure.html#subsec-list-4",
  "type": "Note",
  "number": "7.4",
  "title": "",
  "body": " Notes on lists vs arrays  In some other programming languages, there's a data structure called array , which works the same as a list in Python.  Python also has arrays, though with a different implementation from some others'. This goes to show that in different languages, data structures can have the same name but different implementations, and vice versa.  Generally, the term array is more well-known than list .  "
},
{
  "id": "subsec-list-8",
  "level": "2",
  "url": "sec-data-structure.html#subsec-list-8",
  "type": "Output",
  "number": "7.5",
  "title": "",
  "body": " [1 2 3] <class 'list'> [1 2.5 3] <class 'list'> [1 'test' 3] <class 'list'>  "
},
{
  "id": "subsec-list-9",
  "level": "2",
  "url": "sec-data-structure.html#subsec-list-9",
  "type": "Explanation",
  "number": "7.1",
  "title": "",
  "body": " Code examples using lists   We declare 3 lists, each of which has 3 elements.  The elements of l1 are all integers.  The list l2 stores two integers and a float.  The list l3 has two integers and a string.  The command type() lets us know their data type is list .  "
},
{
  "id": "subsec-list-10",
  "level": "2",
  "url": "sec-data-structure.html#subsec-list-10",
  "type": "Note",
  "number": "7.6",
  "title": "",
  "body": " Notes on using lists  As you can already see, lists have yet another distinct syntax. But we won't go into their syntax and usage yet. Refer to for further discussion about lists.  "
},
{
  "id": "def-dictionary",
  "level": "2",
  "url": "sec-data-structure.html#def-dictionary",
  "type": "Definition",
  "number": "7.7",
  "title": "",
  "body": " Definitions of dictionaries   A dictionary can store multiple pairs of key:value .  It's often used to store descriptive information.   "
},
{
  "id": "subsec-dictionary-6",
  "level": "2",
  "url": "sec-data-structure.html#subsec-dictionary-6",
  "type": "Output",
  "number": "7.8",
  "title": "",
  "body": " {'name': 'Steve', 'gender': 'male', 'dob': 1980, 'hobbies': ['apples', 'swimming', 'programming'], 5: 'random'} <class 'dict'>  "
},
{
  "id": "subsec-dictionary-7",
  "level": "2",
  "url": "sec-data-structure.html#subsec-dictionary-7",
  "type": "Explanation",
  "number": "7.2",
  "title": "",
  "body": " Code examples using a dictionary   We declare a dictionary with 5 elements which are pairs of key:value.  As you can see, the keys and values can have different data types.  The command type() lets us know its data type is dict .  "
},
{
  "id": "subsec-dictionary-8",
  "level": "2",
  "url": "sec-data-structure.html#subsec-dictionary-8",
  "type": "Note",
  "number": "7.9",
  "title": "",
  "body": " Notes on using dictionaries  Dictionaries have yet another distinct syntax. Again, we won't go into their syntax and usage yet. Refer to for further discussion about dictionaries.  "
},
{
  "id": "sec-data-structure-6-2",
  "level": "2",
  "url": "sec-data-structure.html#sec-data-structure-6-2",
  "type": "Video",
  "number": "7.3",
  "title": "Basic Programming — Part 7: Data Structures.",
  "body": " Basic Programming Part 7: Data Structures  Videos part 07  Coming soon.   "
},
{
  "id": "sec-operator",
  "level": "1",
  "url": "sec-operator.html",
  "type": "Section",
  "number": "8",
  "title": "Operators",
  "body": " Operators    Learn about four main types of operators.  Understand assignment operators through an example.      Definitions of operators   In programming, an operator is a symbol or keyword that describes a specific assignment or a mathematical, relational, or logical operation.  In other words, an operator describes an interaction between data.    Previously, the two operators = and + often show up in examples. Let's take a look at the most basic operators.    Arithmetic Operators  The four most basic arithmetic operators are:   Try It Out  What operators do you think work with ?     8 2 15 1.6666666666666667 string 1 string 2    Code examples arithmetic operators  Code examples string concatenation   The first four lines work just the same as mathematical operations.  In line 7, the operator + represents string concatenation (technically not arithmetic but I don't know where else to put it lol).   Some less popular operators are:    1 125 2    Code examples arithmetic operations   You can look them up on the Internet to see how they work.   And you should always keep in mind .    Assignment Operators  You've seen = being used very frequently. This is the most important assignment operator that you need to understand.   Definitions of assignment operations   An assignment operator is used to declare or update a variable.  The value of a variable changes if and only if an assignment operator is used.     Notes on equality  In programming, the assignment operator = should never be associated with equality.   For example (using CodeLens is recommended):   a = 5 print(a) a + 1 print(a) a = a + 1 print(a)    5 5 6    Code examples declaration  Code examples assignment  Code examples updating variables   Firstly, we declare a and give it the value 5 .  In line 4, we have a + 1 , but when we access the value of a in line 5, we still get 5 .  In line 7, we update the variable with a = a + 1 . Therefore, in line 8 a has a value of 6 .    Notes on assignment operators Theoretically, = is the only assignment operator you need to know. But we also have others that serve as shorthands:   Try It Out  Try using these.      x += 5  Is equivalent to x = x + 5     x -= 5  Is equivalent to x = x - 5     x *= 5  Is equivalent to x = x * 5     x \/= 5  Is equivalent to x = x \/ 5        Relational Operators   Relational operators are mostly used in conditional statements, so they will be described in more detail in .   Topic(s) you might be interested in      Links Python = vs ==  \"Python = vs ==\"        Overviews of relational operators As an overview:   x == y  Returns True if x equals y  Returns False if x does not equal y    x != y  Opposite to x == y     x < y  Returns True if x is less than y  Returns False if x is greater than or equal to y    x > y  Returns True if x is greater than y  Returns False if x is less than or equal to y    x <= y  Opposite to x > y     x >= y  Opposite to x < y        Logical Operators   Logical operators are mostly used in conditional statements, so they will be described in more detail in .   Overviews of logical operators As an overview:   x and y  Returns True if both statements are True   Returns False if at least one statement is False     x or y  Returns True if at least one statement is True   Returns False if both statements are False     not x  Reverses the Boolean  Returns True if x is equal to False and vice-versa.            Basic Programming Part 8: Operators  Videos part 08  Coming soon.     "
},
{
  "id": "sec-operator-2",
  "level": "2",
  "url": "sec-operator.html#sec-operator-2",
  "type": "Objectives",
  "number": "8",
  "title": "",
  "body": "  Learn about four main types of operators.  Understand assignment operators through an example.   "
},
{
  "id": "def-operator",
  "level": "2",
  "url": "sec-operator.html#def-operator",
  "type": "Definition",
  "number": "8.1",
  "title": "",
  "body": " Definitions of operators   In programming, an operator is a symbol or keyword that describes a specific assignment or a mathematical, relational, or logical operation.  In other words, an operator describes an interaction between data.   "
},
{
  "id": "subsec-op-arithmetic-5",
  "level": "2",
  "url": "sec-operator.html#subsec-op-arithmetic-5",
  "type": "Output",
  "number": "8.2",
  "title": "",
  "body": " 8 2 15 1.6666666666666667 string 1 string 2  "
},
{
  "id": "subsec-op-arithmetic-6",
  "level": "2",
  "url": "sec-operator.html#subsec-op-arithmetic-6",
  "type": "Explanation",
  "number": "8.1",
  "title": "",
  "body": " Code examples arithmetic operators  Code examples string concatenation   The first four lines work just the same as mathematical operations.  In line 7, the operator + represents string concatenation (technically not arithmetic but I don't know where else to put it lol).  "
},
{
  "id": "subsec-op-arithmetic-9",
  "level": "2",
  "url": "sec-operator.html#subsec-op-arithmetic-9",
  "type": "Output",
  "number": "8.3",
  "title": "",
  "body": " 1 125 2  "
},
{
  "id": "subsec-op-arithmetic-10",
  "level": "2",
  "url": "sec-operator.html#subsec-op-arithmetic-10",
  "type": "Explanation",
  "number": "8.2",
  "title": "",
  "body": " Code examples arithmetic operations   You can look them up on the Internet to see how they work.  "
},
{
  "id": "subsec-op-assignment-2",
  "level": "2",
  "url": "sec-operator.html#subsec-op-assignment-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "assignment operator "
},
{
  "id": "def-op-assignment",
  "level": "2",
  "url": "sec-operator.html#def-op-assignment",
  "type": "Definition",
  "number": "8.4",
  "title": "",
  "body": " Definitions of assignment operations   An assignment operator is used to declare or update a variable.  The value of a variable changes if and only if an assignment operator is used.   "
},
{
  "id": "subsec-op-assignment-4",
  "level": "2",
  "url": "sec-operator.html#subsec-op-assignment-4",
  "type": "Note",
  "number": "8.5",
  "title": "",
  "body": " Notes on equality  In programming, the assignment operator = should never be associated with equality.  "
},
{
  "id": "subsec-op-assignment-7",
  "level": "2",
  "url": "sec-operator.html#subsec-op-assignment-7",
  "type": "Output",
  "number": "8.6",
  "title": "",
  "body": " 5 5 6  "
},
{
  "id": "subsec-op-assignment-8",
  "level": "2",
  "url": "sec-operator.html#subsec-op-assignment-8",
  "type": "Explanation",
  "number": "8.3",
  "title": "",
  "body": " Code examples declaration  Code examples assignment  Code examples updating variables   Firstly, we declare a and give it the value 5 .  In line 4, we have a + 1 , but when we access the value of a in line 5, we still get 5 .  In line 7, we update the variable with a = a + 1 . Therefore, in line 8 a has a value of 6 .  "
},
{
  "id": "subsec-op-relational-2",
  "level": "2",
  "url": "sec-operator.html#subsec-op-relational-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Relational operators "
},
{
  "id": "subsec-op-logical-2",
  "level": "2",
  "url": "sec-operator.html#subsec-op-logical-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Logical operators "
},
{
  "id": "sec-operator-8-2",
  "level": "2",
  "url": "sec-operator.html#sec-operator-8-2",
  "type": "Video",
  "number": "8.4",
  "title": "Basic Programming — Part 8: Operators.",
  "body": " Basic Programming Part 8: Operators  Videos part 08  Coming soon.   "
},
{
  "id": "sec-attribute",
  "level": "1",
  "url": "sec-attribute.html",
  "type": "Section",
  "number": "9",
  "title": "Attributes",
  "body": " Attributes    Learn about attributes and how to access them.     Definitions of attributes   An attribute is a built-in variable storing descriptive information regarding another piece of data. In other words, it's metadata.  Every data type has its own set of attributes.  The attributes of a piece of data are automatically updated when said data is updated.     Accessing an attribute  Syntax of accessing attributes      To demonstrate attributes, the following example makes use of an external data structure a matrix imported from the external library Numpy (which you don't have to fully understand):   Topic(s) you might be interested in      Links Python libraries  \"what is a Python library\"      Links Numpy  \"what is Numpy\"      Links matrices  \"what is a matrix\"         6 (2, 3)    Code examples accessing attributes  Functions np.matrix()    mat.size returns the total number of elements of the matrix named mat .   mat.shape returns the number of rows and columns of the matrix respectively.   However, the data type int , for example, does not have such attributes:    AttributeError Cell In [1], line 2 ... AttributeError: 'int' object has no attribute 'size'    Code examples accessing invalid attribute   As the error states.        Basic Programming Part 9: Attributes  Videos part 09  Coming soon.    "
},
{
  "id": "sec-attribute-2",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-2",
  "type": "Objectives",
  "number": "9",
  "title": "",
  "body": "  Learn about attributes and how to access them.   "
},
{
  "id": "def-attribute",
  "level": "2",
  "url": "sec-attribute.html#def-attribute",
  "type": "Definition",
  "number": "9.1",
  "title": "",
  "body": " Definitions of attributes   An attribute is a built-in variable storing descriptive information regarding another piece of data. In other words, it's metadata.  Every data type has its own set of attributes.  The attributes of a piece of data are automatically updated when said data is updated.   "
},
{
  "id": "sec-attribute-4",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-4",
  "type": "Syntax",
  "number": "9.2",
  "title": "Accessing an attribute.",
  "body": " Accessing an attribute  Syntax of accessing attributes     "
},
{
  "id": "sec-attribute-8",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-8",
  "type": "Output",
  "number": "9.3",
  "title": "",
  "body": " 6 (2, 3)  "
},
{
  "id": "sec-attribute-9",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-9",
  "type": "Explanation",
  "number": "9.1",
  "title": "",
  "body": " Code examples accessing attributes  Functions np.matrix()    mat.size returns the total number of elements of the matrix named mat .   mat.shape returns the number of rows and columns of the matrix respectively.  "
},
{
  "id": "sec-attribute-12",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-12",
  "type": "Output",
  "number": "9.4",
  "title": "",
  "body": " AttributeError Cell In [1], line 2 ... AttributeError: 'int' object has no attribute 'size'  "
},
{
  "id": "sec-attribute-13",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-13",
  "type": "Explanation",
  "number": "9.2",
  "title": "",
  "body": " Code examples accessing invalid attribute   As the error states.  "
},
{
  "id": "sec-attribute-15",
  "level": "2",
  "url": "sec-attribute.html#sec-attribute-15",
  "type": "Video",
  "number": "9.3",
  "title": "Basic Programming — Part 9: Attributes.",
  "body": " Basic Programming Part 9: Attributes  Videos part 09  Coming soon.   "
},
{
  "id": "sec-function",
  "level": "1",
  "url": "sec-function.html",
  "type": "Section",
  "number": "10",
  "title": "Functions",
  "body": " Functions    Learn about functions and how to use them.    Again we are met with a familiar concept in mathematics functions , which also play a big role in programming.  Suppose we have 100 mathematical expressions: We realize they are all quadratics; therefore, we can shorten our representation using a function as follows:   That is also the essence of functions in programming.   Definitions of functions   A function is a reusable block of code designed to perform a specific task.  A function can accept zero, one, or more inputs , which are also called parameters .  A function can return zero, one, or more outputs , which are also called return values .  To declare a function is to create a new one.  To call a function is to use an existing one.     Notes on using functions  In this section, we will not go into function declaration. Instead, we'll focus on using functions that are built-in or provided by libraries.  To read more about function declaration, refer to .    Calling a function  Syntax of calling functions   Depending on how a function is declared , we have two ways to call it: or    A familiar example is the function print() , which can be called anywhere and with any number of inputs. It then shows them in the terminal.    5 2 -2 1 Hello World! 5.5    Code examples function print()  Functions print()   Line 1: We call the function print() with one input 5 .  Line 2: We provide no inputs, so print() outputs an empty line into the terminal.  Line 3: We give it two integer inputs 2 and -2 .  Line 4: We give it multiple inputs of different data types.   Another example is len() , which accepts exactly one input that is a data structure, and it returns the number of elements.   Try It Out  Does len() work with a string?     4    Code examples function len()  Functions len()  The function len() receives one input and returns the number of elements.   So, len() has more specifications than print() . You have to call it with exactly one input, which must be a data structure. The following examples will return errors:   Try It Out  Can you fix this example?     TypeError Cell In [1], line 3 ... TypeError: len() takes exactly one argument (2 given)    Code examples function len()  Functions len()   The function len() accepts exactly one input, but two parameters were given.   Another example:    TypeError Cell In [1], line 2 ... TypeError: object of type 'int' has no len()    Code examples function len()  Functions len()   The input of len() must be a data structure, but we are calling it with an int .   Our final example is upper() , which follows the second syntax for calling a function. In this case, input 1 must be a string. And the function returns a new string with every character in uppercase.   Try It Out  Guess the function that turns a string to all lowercase.     HELLO FRIEND!    Code examples function upper()  Functions upper()  The function upper() returns a new all-caps string.   The following produces an error:    AttributeError Cell In [1], line 2 ... AttributeError: 'int' object has no attribute 'upper'    Code examples function upper()  Functions upper()   The function upper() accepts exactly one input of type str , but we are giving it an int .        Basic Programming Part 10: Functions  Videos part 10  Coming soon.    "
},
{
  "id": "sec-function-2",
  "level": "2",
  "url": "sec-function.html#sec-function-2",
  "type": "Objectives",
  "number": "10",
  "title": "",
  "body": "  Learn about functions and how to use them.   "
},
{
  "id": "sec-function-3",
  "level": "2",
  "url": "sec-function.html#sec-function-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "functions "
},
{
  "id": "sec-function-5",
  "level": "2",
  "url": "sec-function.html#sec-function-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "functions "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-function.html#def-function",
  "type": "Definition",
  "number": "10.1",
  "title": "",
  "body": " Definitions of functions   A function is a reusable block of code designed to perform a specific task.  A function can accept zero, one, or more inputs , which are also called parameters .  A function can return zero, one, or more outputs , which are also called return values .  To declare a function is to create a new one.  To call a function is to use an existing one.   "
},
{
  "id": "sec-function-7",
  "level": "2",
  "url": "sec-function.html#sec-function-7",
  "type": "Note",
  "number": "10.2",
  "title": "",
  "body": " Notes on using functions  In this section, we will not go into function declaration. Instead, we'll focus on using functions that are built-in or provided by libraries.  To read more about function declaration, refer to .  "
},
{
  "id": "syntax-call-function",
  "level": "2",
  "url": "sec-function.html#syntax-call-function",
  "type": "Syntax",
  "number": "10.3",
  "title": "Calling a function.",
  "body": " Calling a function  Syntax of calling functions   Depending on how a function is declared , we have two ways to call it: or   "
},
{
  "id": "sec-function-11",
  "level": "2",
  "url": "sec-function.html#sec-function-11",
  "type": "Output",
  "number": "10.4",
  "title": "",
  "body": " 5 2 -2 1 Hello World! 5.5  "
},
{
  "id": "sec-function-12",
  "level": "2",
  "url": "sec-function.html#sec-function-12",
  "type": "Explanation",
  "number": "10.1",
  "title": "",
  "body": " Code examples function print()  Functions print()   Line 1: We call the function print() with one input 5 .  Line 2: We provide no inputs, so print() outputs an empty line into the terminal.  Line 3: We give it two integer inputs 2 and -2 .  Line 4: We give it multiple inputs of different data types.  "
},
{
  "id": "sec-function-16",
  "level": "2",
  "url": "sec-function.html#sec-function-16",
  "type": "Output",
  "number": "10.5",
  "title": "",
  "body": " 4  "
},
{
  "id": "sec-function-17",
  "level": "2",
  "url": "sec-function.html#sec-function-17",
  "type": "Explanation",
  "number": "10.2",
  "title": "",
  "body": " Code examples function len()  Functions len()  The function len() receives one input and returns the number of elements.  "
},
{
  "id": "sec-function-21",
  "level": "2",
  "url": "sec-function.html#sec-function-21",
  "type": "Output",
  "number": "10.6",
  "title": "",
  "body": " TypeError Cell In [1], line 3 ... TypeError: len() takes exactly one argument (2 given)  "
},
{
  "id": "sec-function-22",
  "level": "2",
  "url": "sec-function.html#sec-function-22",
  "type": "Explanation",
  "number": "10.3",
  "title": "",
  "body": " Code examples function len()  Functions len()   The function len() accepts exactly one input, but two parameters were given.  "
},
{
  "id": "sec-function-25",
  "level": "2",
  "url": "sec-function.html#sec-function-25",
  "type": "Output",
  "number": "10.7",
  "title": "",
  "body": " TypeError Cell In [1], line 2 ... TypeError: object of type 'int' has no len()  "
},
{
  "id": "sec-function-26",
  "level": "2",
  "url": "sec-function.html#sec-function-26",
  "type": "Explanation",
  "number": "10.4",
  "title": "",
  "body": " Code examples function len()  Functions len()   The input of len() must be a data structure, but we are calling it with an int .  "
},
{
  "id": "sec-function-30",
  "level": "2",
  "url": "sec-function.html#sec-function-30",
  "type": "Output",
  "number": "10.8",
  "title": "",
  "body": " HELLO FRIEND!  "
},
{
  "id": "sec-function-31",
  "level": "2",
  "url": "sec-function.html#sec-function-31",
  "type": "Explanation",
  "number": "10.5",
  "title": "",
  "body": " Code examples function upper()  Functions upper()  The function upper() returns a new all-caps string.  "
},
{
  "id": "sec-function-34",
  "level": "2",
  "url": "sec-function.html#sec-function-34",
  "type": "Output",
  "number": "10.9",
  "title": "",
  "body": " AttributeError Cell In [1], line 2 ... AttributeError: 'int' object has no attribute 'upper'  "
},
{
  "id": "sec-function-35",
  "level": "2",
  "url": "sec-function.html#sec-function-35",
  "type": "Explanation",
  "number": "10.6",
  "title": "",
  "body": " Code examples function upper()  Functions upper()   The function upper() accepts exactly one input of type str , but we are giving it an int .  "
},
{
  "id": "sec-function-37",
  "level": "2",
  "url": "sec-function.html#sec-function-37",
  "type": "Video",
  "number": "10.7",
  "title": "Basic Programming — Part 10: Functions.",
  "body": " Basic Programming Part 10: Functions  Videos part 10  Coming soon.   "
},
{
  "id": "sec-error",
  "level": "1",
  "url": "sec-error.html",
  "type": "Section",
  "number": "11",
  "title": "Errors",
  "body": " Errors    Learn about errors and ways to deal with them.     Congratulations! You have equipped yourself with quite a few programming fundamentals.  Before we continue with harder concepts, you should learn to deal with errors . This helps improve your learning journey and experience.   Overviews of errors  Errors, if any, will be shown in the terminal . Some additional pieces of information accompanying an error are:   The line on which the error is spotted    The type of error    A description of the error           Below are some examples:   Try It Out  Run the examples and read the errors.  Then, try to fix them.     Cell In [1], line 3 print(\"This is another string.) ^ SyntaxError: unterminated string literal (detected at line 3)    Code examples syntax error   An error is spotted in line 3, which is of type SyntaxError .  Reading the description and taking another look at line 3, we can easily see that we are missing a quotation mark.   Another example:    TypeError Cell In [1], line 3 ... TypeError: unsupported operand type(s) for +: 'int' and 'str'    Code examples type error   An error of type TypeError is spotted at line 3.  The description simply means that addition between an integer and a string is unsupported.   The final example uses an external function from the library Numpy that simply calculates the square root.    TypeError Cell In [1], line 2 ... TypeError: ufunc 'sqrt' not supported for the input types, and the inputs could not be safely coerced to any supported types according to the casting rule ''safe''    Code examples type error   An error of type TypeError is spotted at line 2.  The description might be long, but essentially it reads a string cannot be passed into the function sqrt .   But what to do if you're still confused after reading the error?    How To Fix Errors  There is no programmer, however skilled, who is able to memorize every potential error. It's totally normal for a senior programmer to look up errors on the Internet, even ones they've fixed before. But of course, the more errors they deal with, the more experience they accumulate.  Coming up are some of my personal experiences in fixing errors. You can try the following approaches:   1. Fix it In the case the error is easy to understand, just fix it. Otherwise, continue with the next step.   2. Search it on the Internet Copy and paste its description onto Google.   Insights searching  You should include the programming language being used as a keyword to increase efficiency. For instance, python unterminated string literal... .    Insights documentation  You can refer to documentation in your language of choice. But it is commonly the case that English resources are the best in terms of availability and being up-to-date.   The majority of errors you can run into have already been solved by others. Thus, you can quickly read online posts and discussions and learn their solutions. Some of the most popular forums are Stack Overflow , Github , Stack Exchange , Reddit .  Here, if you're still unable to fix it, or you run into a new one, you can repeat the process, or proceed to step 3.   3. Describe it yourself It seems others' solutions don't apply to you when using the provided description. In that case, why don't you try to detail it using your own words? Describe what you're trying to achieve, using what data types, in which language, your assumption of why the error occurs, and so on. Not working? Let's keep going.   4. Use artificial intelligence (AI) If possible, you should try taking advantage of coding AIs such as ChatGPT or Github Copilot to fix errors. This is becoming an increasingly popular and effective approach.   5. Make a post When all other means have failed, it's time to request for help from other human programmers. You can ask people you know or make a post about your problems on online programming forums.   Insights on online etiquette  Make sure to study online etiquette to know how to behave appropriately when using such forums. Since you're looking for others' help, being respectful is a must.          Basic Programming Part 11: Errors & How To Fix Them  Videos part 11  Coming soon.     "
},
{
  "id": "sec-error-2",
  "level": "2",
  "url": "sec-error.html#sec-error-2",
  "type": "Objectives",
  "number": "11",
  "title": "",
  "body": "  Learn about errors and ways to deal with them.   "
},
{
  "id": "sec-error-3-2",
  "level": "2",
  "url": "sec-error.html#sec-error-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "errors "
},
{
  "id": "sec-error-3-3",
  "level": "2",
  "url": "sec-error.html#sec-error-3-3",
  "type": "Note",
  "number": "11.1",
  "title": "",
  "body": " Overviews of errors  Errors, if any, will be shown in the terminal . Some additional pieces of information accompanying an error are:   The line on which the error is spotted    The type of error    A description of the error          "
},
{
  "id": "sec-error-3-7",
  "level": "2",
  "url": "sec-error.html#sec-error-3-7",
  "type": "Output",
  "number": "11.2",
  "title": "",
  "body": " Cell In [1], line 3 print(\"This is another string.) ^ SyntaxError: unterminated string literal (detected at line 3)  "
},
{
  "id": "sec-error-3-8",
  "level": "2",
  "url": "sec-error.html#sec-error-3-8",
  "type": "Explanation",
  "number": "11.1",
  "title": "",
  "body": " Code examples syntax error   An error is spotted in line 3, which is of type SyntaxError .  Reading the description and taking another look at line 3, we can easily see that we are missing a quotation mark.  "
},
{
  "id": "sec-error-3-11",
  "level": "2",
  "url": "sec-error.html#sec-error-3-11",
  "type": "Output",
  "number": "11.3",
  "title": "",
  "body": " TypeError Cell In [1], line 3 ... TypeError: unsupported operand type(s) for +: 'int' and 'str'  "
},
{
  "id": "sec-error-3-12",
  "level": "2",
  "url": "sec-error.html#sec-error-3-12",
  "type": "Explanation",
  "number": "11.2",
  "title": "",
  "body": " Code examples type error   An error of type TypeError is spotted at line 3.  The description simply means that addition between an integer and a string is unsupported.  "
},
{
  "id": "sec-error-3-15",
  "level": "2",
  "url": "sec-error.html#sec-error-3-15",
  "type": "Output",
  "number": "11.4",
  "title": "",
  "body": " TypeError Cell In [1], line 2 ... TypeError: ufunc 'sqrt' not supported for the input types, and the inputs could not be safely coerced to any supported types according to the casting rule ''safe''  "
},
{
  "id": "sec-error-3-16",
  "level": "2",
  "url": "sec-error.html#sec-error-3-16",
  "type": "Explanation",
  "number": "11.3",
  "title": "",
  "body": " Code examples type error   An error of type TypeError is spotted at line 2.  The description might be long, but essentially it reads a string cannot be passed into the function sqrt .  "
},
{
  "id": "subsec-fix-error-4",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1. Fix it "
},
{
  "id": "subsec-fix-error-5",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "2. Search it on the Internet "
},
{
  "id": "subsec-fix-error-6",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-6",
  "type": "Insight",
  "number": "11.5",
  "title": "",
  "body": " Insights searching  You should include the programming language being used as a keyword to increase efficiency. For instance, python unterminated string literal... .  "
},
{
  "id": "subsec-fix-error-7",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-7",
  "type": "Insight",
  "number": "11.6",
  "title": "",
  "body": " Insights documentation  You can refer to documentation in your language of choice. But it is commonly the case that English resources are the best in terms of availability and being up-to-date.  "
},
{
  "id": "subsec-fix-error-8",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stack Overflow Github Stack Exchange Reddit "
},
{
  "id": "subsec-fix-error-10",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "3. Describe it yourself "
},
{
  "id": "subsec-fix-error-11",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "4. Use artificial intelligence (AI) ChatGPT Github Copilot "
},
{
  "id": "subsec-fix-error-12",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "5. Make a post "
},
{
  "id": "subsec-fix-error-13",
  "level": "2",
  "url": "sec-error.html#subsec-fix-error-13",
  "type": "Insight",
  "number": "11.7",
  "title": "",
  "body": " Insights on online etiquette  Make sure to study online etiquette to know how to behave appropriately when using such forums. Since you're looking for others' help, being respectful is a must.  "
},
{
  "id": "sec-error-5-2",
  "level": "2",
  "url": "sec-error.html#sec-error-5-2",
  "type": "Video",
  "number": "11.4",
  "title": "Basic Programming — Part 11: Errors &amp; How To Fix Them.",
  "body": " Basic Programming Part 11: Errors & How To Fix Them  Videos part 11  Coming soon.   "
},
{
  "id": "sec-personal-experience",
  "level": "1",
  "url": "sec-personal-experience.html",
  "type": "Section",
  "number": "12",
  "title": "Personal Experiences",
  "body": " Personal Experiences    I'll bring up some insights and interesting topics that are worth knowing before you go into more advanced fundamentals.  This section is a bit wordy, so you can pick out topics that interest you, or you can even skip the text and just watch the video.          Basic Programming Part 12: My Experiences  Videos part 12  Coming soon.        Coming up are some of the many lessons I've learned throughout my journey as a programmer. Before we start, I'd like to have some words with you.  Honestly, if I could restart my journey as a programmer, I'd still do things all the same. It is thanks to the lessons I've learned from being inexperienced that I am who I am today. Others I learned by reading about people's mistakes on the Internet and avoiding making them, which is why I thought this section's a good idea.  If your first exposure to programming is this article, then it's likely that your starting mindset will be very different from mine, in a good way of course.  Truthfully though, I'd like you to make a lot of mistakes still, which is why I won't write step-by-step guides on how to avoid them, but instead my personal opinions. This is actually how my parents raised me, for which I'm extremely grateful. Basically, they didn't keep me away from making mistakes, which would mean I wasn't learning anything. Instead, they taught me about self-reflection and how to get the most learning out of mistakes.  Okay then, I hope this section will be useful for you!    Start Simple   You can choose a programming language and a code editor\/IDE by thinking simply.  Start by coming up with a small and achievable idea. Then, look for suitable tools and learning resources by asking the Internet.   I think when I first got into programming, I cared too much about choosing a programming language to learn. My Youtube feed always had those topics mentioned in . My inexperienced self would think those were important things to consider, and I'd watch every video that showed up to see people's opinions. But doing all that only made me scared of actually learning to code because I'd start asking myself questions like:   What if I learn the wrong language and it gets obsolete in the future?    What if A becomes a better choice than B a few years from now?    How long would it take me to master this language?        At some point, I learned to think in a different way. For instance, there's a time when I was very into game development, and it kinda went like this:   Okay. I wanna make a game, so let's look up game engines for beginners on Google.   After a few articles and videos, I ended up with Godot an open-source game engine that's been gaining popularity, has a big and supportive community, and sufficient documentation.   Okay, now do I wanna use GDScript (Godot's built-in language which has beginner-friendly syntax), or C# (a popular language which is lower-level)?   Well, that question took me just 10 seconds to answer. I ain't about to learn C# to make no games.   After that, it was really just a constant cycle of studying online materials and experimenting with stuff.  Because I already had some ideas in mind, I got straight into making them and learning necessary concepts along the way, but never more than I needed. If I got stuck, it'd mean I had some online research to do. Otherwise, I was doing just fine with whatever knowledge I had, even if my solutions weren't the most effective or beautiful.  Personally, I think it's good that I did that instead of watching a 12-hour course covering every little thing about game development and then making somebody else's idea.   Starting simple can also be applied to choosing a code editor or IDE (integrated development environment). Until now, I think I've tried 5 IDE at most, and I've stuck with VSCode for a while because, again, it's user-friendly.  The code cells provided in this article are very minimal and might be slightly inconvenient, but they're everything you need to start, aren't they?    The Tutorial Hell   Just do something. You learn by doing, not by mindlessly consuming content.   The tutorial hell is something every programmer has experienced. It's when you are constantly watching videos and reading articles teaching you to do something, but you never actually sit down and type away at a computer.  The reason for this phenomenon could be a lack of motivation or ideas, procrastination, poor social media management, It's also because there's an abundance of online contents about coding, which can be excessive sometimes.  Whenever this happens to me, I'd force myself to put down the phone and turn on my computer. Then I'd open up Google and VSCode and start looking for something very easy to do and also interesting enough. This whole process takes at most 5 minutes, but it always gets me to begin writing some code, whatever it may be about.    Have Fun   So long as you find joy in the process, you can always get back to it and do better than ever before.  If you keep learning and doing, you will improve without a doubt.   Since stress and burn-outs are gonna be unavoidable sometimes, I think it's incredibly important to always have fun with the process.  Don't worry, you're definitely gonna experience stuff like:  error messages showing up one after another  getting stuck when following step-by-step installation guides  understanding nothing about a new concept     And sometimes you're gonna feel as though you're not making any progress, so you doubt yourself and wonder if programming is not the way to go.  Honestly, these kinds of stress occur in every creative discipline and to everybody. Some days are good, some days are bad. So, why not just enjoy the process and have fun along the way?  Know that even if you think you're not making any progress, you definitely are. The author of Atomic Habits James Clear associates this feeling with the Value of Disappointment . Basically, your progress is not a linear line always going up that you can feel every day. Instead, it's more of an exponential curve that starts slow and gradually picks up the speed. Though there are days when you feel like it's not going anywhere, there are also days when something just clicks, and you're on a roll.  If you get stuck, maybe find a new simple goal and learn a new language? You've learned the fundamentals, which are applicable to most modern programming languages. So as you learn the 2nd, the 3rd language, and so on, you're discovering new possibilities, and your potential is only ever going up.    Be Open-Minded   You should always be open to new ideas.  You should keep a balance between building good habits and trying new things.   There are always gonna be new interesting things to learn. So, keep an open mind and be eager to learn them.  In coding communities, there are often conventions and rules of thumb such as:  how to name variables  how to format code  how to organize files     People learn them to improve efficiency and cooperation. And depending on the community, purpose, or programming language, standards are gonna vary. Thus, you should be objective and neutral when entering new environments and meeting new people, since you have to learn their game.  As a beginner, nobody but you will read your code. So, it's good to create a good balance between learning good habits and having freedom. Basically, you should always try to improve your code, but also take it easy. There's no need to be able to produce beautiful or efficient code right off the bat, cause that'd be super stressful.  Experienced programmers often share best practices. These can be extremely beneficial to know about, but also harmful if overused without a good understanding. They are supposed to help you think critically and adapt quickly to new situations, not make you a close-minded coder who always does things the same way.    Some Technical Pointers       Use A Simple Virtual Environment   Look for and use a simple virtual environment, which helps prevent conflicts between incompatible programming packages and dependencies.   Let's say you wanna make a game with Python. So you do just that you download and install Python version 3.11.6 and Pygame (the Python library for making games). And everything works just fine.  Fast forward... You suddenly have the urge to make some cool animations with Python. So you ask the Internet and Manim shows up. You excitedly follow its installation guide and are eager to get started. At one point, it says something along the lines of Manim needs Python version 3.12.1 to work... Not a problem? All you have to do is update Python and everything's good to go again.  However, when you go back to your Pygame projects, which were running just fine before, there are errors. Looking into those, you find out that Pygame doesn't work with Python version 3.12.1 yet.  So do you downgrade Python to continue developing games at the expense of Manim, or do you forsake the games you've been so passionate about?  A worse case is when you accidentally install both versions of Python and have them run simultaneously. Now this can really mess your PC up as conflicts upon conflicts show up.  So, a straightforward solution is to use a virtual environment, which prevents the not-so-hypothetical predicament above. It helps manage programming packages and dependencies on a per-environment basis, meaning you can have multiple environments unrelated to one another.  Now, you can set up two separate environments one with Python 3.11.6 and Pygame installed, and the other with Python 3.12.1 and Manim. Problem's solved!    Know A Bit About Command-Line Interfaces   As you explore the world of programming on your own, you will naturally learn to use command-line interfaces.   When the time comes for you to explore different languages and tools on your own, you will have to use command-line interfaces (CLI) frequently. For the sake of simplicity, CLI are just the lower-level counterparts of user interfaces (UI). On Windows, the two built-in CLI are Command Prompt (CMD) and Windows PowerShell.  But don't worry, you don't have to take a course on this. You will gradually learn the common commands as you go. Detailed guides always have commands ready to be copy-pasted into your CLI and run with a press of the Enter key anyway.  Honestly, when I use PyPI (or PIP, which is a package manager for Python) all I know is how to install, update, and uninstall stuff. And I use the CMD for navigating files, switching between administration modes, and using virtual environments. That's it, nothing else really.  Finally, if errors show up when using a CLI, you just need to apply exactly what you've learned in the previous section.    "
},
{
  "id": "sec-personal-experience-2",
  "level": "2",
  "url": "sec-personal-experience.html#sec-personal-experience-2",
  "type": "Objectives",
  "number": "12",
  "title": "",
  "body": "  I'll bring up some insights and interesting topics that are worth knowing before you go into more advanced fundamentals.  This section is a bit wordy, so you can pick out topics that interest you, or you can even skip the text and just watch the video.   "
},
{
  "id": "sec-personal-experience-3-2",
  "level": "2",
  "url": "sec-personal-experience.html#sec-personal-experience-3-2",
  "type": "Video",
  "number": "12.1",
  "title": "Basic Programming — Part 12: My Experiences.",
  "body": " Basic Programming Part 12: My Experiences  Videos part 12  Coming soon.   "
},
{
  "id": "subsec-pe-start-simple-2",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-start-simple-2",
  "type": "TL;DR",
  "number": "12.1",
  "title": "",
  "body": " You can choose a programming language and a code editor\/IDE by thinking simply.  Start by coming up with a small and achievable idea. Then, look for suitable tools and learning resources by asking the Internet.  "
},
{
  "id": "subsec-pe-tutorial-hell-2",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-tutorial-hell-2",
  "type": "TL;DR",
  "number": "12.2",
  "title": "",
  "body": " Just do something. You learn by doing, not by mindlessly consuming content.  "
},
{
  "id": "subsec-pe-have-fun-2",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-have-fun-2",
  "type": "TL;DR",
  "number": "12.3",
  "title": "",
  "body": " So long as you find joy in the process, you can always get back to it and do better than ever before.  If you keep learning and doing, you will improve without a doubt.  "
},
{
  "id": "subsec-pe-have-fun-6",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-have-fun-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Value of Disappointment "
},
{
  "id": "subsec-pe-open-minded-2",
  "level": "2",
  "url": "sec-personal-experience.html#subsec-pe-open-minded-2",
  "type": "TL;DR",
  "number": "12.4",
  "title": "",
  "body": " You should always be open to new ideas.  You should keep a balance between building good habits and trying new things.  "
},
{
  "id": "subsubsec-pe-virtual-environment-2",
  "level": "2",
  "url": "sec-personal-experience.html#subsubsec-pe-virtual-environment-2",
  "type": "TL;DR",
  "number": "12.5",
  "title": "",
  "body": " Look for and use a simple virtual environment, which helps prevent conflicts between incompatible programming packages and dependencies.  "
},
{
  "id": "subsubsec-pe-cli-2",
  "level": "2",
  "url": "sec-personal-experience.html#subsubsec-pe-cli-2",
  "type": "TL;DR",
  "number": "12.6",
  "title": "",
  "body": " As you explore the world of programming on your own, you will naturally learn to use command-line interfaces.  "
},
{
  "id": "sec-conditional",
  "level": "1",
  "url": "sec-conditional.html",
  "type": "Section",
  "number": "13",
  "title": "Conditional Statements",
  "body": " Conditional Statements        Coming soon.  "
},
{
  "id": "sec-conditional-2",
  "level": "2",
  "url": "sec-conditional.html#sec-conditional-2",
  "type": "Objectives",
  "number": "13",
  "title": "",
  "body": "     "
},
{
  "id": "sec-loop",
  "level": "1",
  "url": "sec-loop.html",
  "type": "Section",
  "number": "14",
  "title": "Loops",
  "body": " Loops        Coming soon.  "
},
{
  "id": "sec-loop-2",
  "level": "2",
  "url": "sec-loop.html#sec-loop-2",
  "type": "Objectives",
  "number": "14",
  "title": "",
  "body": "     "
},
{
  "id": "sec-scope",
  "level": "1",
  "url": "sec-scope.html",
  "type": "Section",
  "number": "15",
  "title": "Scopes",
  "body": " Scopes        Coming soon.  "
},
{
  "id": "sec-scope-2",
  "level": "2",
  "url": "sec-scope.html#sec-scope-2",
  "type": "Objectives",
  "number": "15",
  "title": "",
  "body": "     "
},
{
  "id": "sec-declare-function",
  "level": "1",
  "url": "sec-declare-function.html",
  "type": "Section",
  "number": "16",
  "title": "Declaring Functions",
  "body": " Declaring Functions        Coming soon.  "
},
{
  "id": "sec-declare-function-2",
  "level": "2",
  "url": "sec-declare-function.html#sec-declare-function-2",
  "type": "Objectives",
  "number": "16",
  "title": "",
  "body": "     "
},
{
  "id": "sec-class",
  "level": "1",
  "url": "sec-class.html",
  "type": "Section",
  "number": "17",
  "title": "Classes",
  "body": " Classes        Coming soon.  "
},
{
  "id": "sec-class-2",
  "level": "2",
  "url": "sec-class.html#sec-class-2",
  "type": "Objectives",
  "number": "17",
  "title": "",
  "body": "     "
},
{
  "id": "sec-using-list",
  "level": "1",
  "url": "sec-using-list.html",
  "type": "Section",
  "number": "18",
  "title": "Using Lists",
  "body": " Using Lists        Coming soon.  "
},
{
  "id": "sec-using-list-2",
  "level": "2",
  "url": "sec-using-list.html#sec-using-list-2",
  "type": "Objectives",
  "number": "18",
  "title": "",
  "body": "     "
},
{
  "id": "sec-using-dictionary",
  "level": "1",
  "url": "sec-using-dictionary.html",
  "type": "Section",
  "number": "19",
  "title": "Using Dictionaries",
  "body": " Using Dictionaries        Coming soon.  "
},
{
  "id": "sec-using-dictionary-2",
  "level": "2",
  "url": "sec-using-dictionary.html#sec-using-dictionary-2",
  "type": "Objectives",
  "number": "19",
  "title": "",
  "body": "     "
},
{
  "id": "appendix-playground",
  "level": "1",
  "url": "appendix-playground.html",
  "type": "Appendix",
  "number": "A",
  "title": "Playground",
  "body": " Playground   This appendix provides you with some code cells in different programming languages, made possible by PreTeXt . By playing around with them, you can have a better understanding of the idea that though their syntax might be slightly, or hugely, dissimilar, the fundamental concepts are always there .  A fun way to try a language out is by looking up its code examples. For instance, you can search for python code examples on Google. Nowadays most programming sites have their own coding environments, so you can just use theirs, or you can copy-paste and run the examples here.    Python  Python is one of the most popular modern programming languages right now. It's high-level and multi-purpose.   Links Python examples  Search for Python code examples.    Below is a more complex Python environment. The slider allows you to work on code through repeated edit-compile-test cycles. There is also a CodeLens button, which activates a steppable program similar to a debugger, meaning you can watch output, variables, and other data change line by line (or statement by statement).   # This is a Python cell # Write and run your Python code here print(\"Hello world!\")     Actually, this version has another advantage. It accepts user input, as opposed to the simpler version.   # This is a Python cell # Write and run your Python code here s = input(\"Your input:\") print(s)     Javascript  Virtually every modern web page has Javascript running under the hood. Its main use case is to provide interactivity to websites.   Links Javascript examples  Search for Javascript code examples.    \/\/ This is a Javascript cell \/\/ Write and run your Javascript code here alert(\"Hello world!\");    Output of Javascript code might not appear right below. Instead, open the Element Inspect panel by right-clicking on the page and select Inspect . Then, go to the Console tab. Run the code and you should see the output appear there.     HTML  Technically speaking, HTML (HyperText Markup Language) is not a programming language, but instead a markup language . However, playing around with HTML, or other markup languages, can be very beneficial, especially for beginners. (P.S. This article is authored in PreTeXt , a markup language.)   Topic(s) you might be interested in   Links markup languages  \"what is a markup language\"     Links HTML examples  Search for HTML code examples.      Sage  Sage is part of SageMath, an open-source mathematics software system. It's based on Python, so their syntax is mostly similar.   Links SageMath examples  Search for SageMath code examples.     "
},
{
  "id": "subsec-javascript-play-5",
  "level": "2",
  "url": "appendix-playground.html#subsec-javascript-play-5",
  "type": "Note",
  "number": "A.1",
  "title": "",
  "body": " Output of Javascript code might not appear right below. Instead, open the Element Inspect panel by right-clicking on the page and select Inspect . Then, go to the Console tab. Run the code and you should see the output appear there.  "
},
{
  "id": "subsec-html-play-2",
  "level": "2",
  "url": "appendix-playground.html#subsec-html-play-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "markup language "
},
{
  "id": "appendix-whats-next",
  "level": "1",
  "url": "appendix-whats-next.html",
  "type": "Appendix",
  "number": "B",
  "title": "What’s Next?",
  "body": " What's Next?   Coming soon.  "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "C",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < >  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:  Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This article was authored in PreTeXt and deployed to Github Pages.  Languages:  English   Tiếng Việt     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
