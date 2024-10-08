function fibbonaciSeries(count:number){
    let n1:number =0;
    let n2:number =1;
    let n3:number;

    console.log(n1);
    console.log(n2);

    for (let i = 0; i <count; i++) {
        n3=n1+n2;
        console.log(n3);
        n1=n2;
        n2=n3;
        
    }
}

fibbonaciSeries(10);