function fibbonaciSeries(count) {
    var n1 = 0;
    var n2 = 1;
    var n3;
    console.log(n1);
    console.log(n2);
    for (var i = 0; i < count; i++) {
        n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}
fibbonaciSeries(10);
