interface People {
    name: string;
}

class Engineer implements People{
    name: string;
}

var a = new Engineer();
a.name = 'John';
