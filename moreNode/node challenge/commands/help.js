function helpfn(){
    console.log(`
    The following gives the commands to be ussed to perform specific task:-
                  1) wcat "file path" to display content
                  2) wcat "file name" "command name "
                                 -s :- to remove extra spacing
                                 -n :- to give numbering to all line
                                 -b :- to give numbering to the text lines
                                 
                  3)wcat "- wcat filename2path >> filename2path => append all the content of filename into filename2"
                  4) wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2 
                  `)       
} 
module.exports={
helpKey : helpfn
}