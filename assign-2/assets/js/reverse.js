function rev_num()
{
    let num = prompt("Enter the number to be reversed :", " ");
    let n= num;
    let rev = 0, rem;
    while (n>0)
    {
        rem = n % 10;
        rev = rev * 10 + rem ;
        n = Math.floor(n/10);
    }
    document.write("The given number is : " +num+ " <br/> The reversed number is : " +rev+ "\n");
}