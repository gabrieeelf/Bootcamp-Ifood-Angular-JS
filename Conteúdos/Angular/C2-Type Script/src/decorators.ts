// function ExibirNome(target: any){
//     console.log(target);
// }

// @ExibirNome
// class funcionario {}

// function apiVersion(version: string){
//     return (target: any) => {
//         Object.assign(target.prototype, {__version: version, __name: "Gabriel"});
//     };
// }

// @apiVersion("1.10")
// class Api{}

// const api = new Api();
// console.log(api.__version);
// console.log(api.__name);

function minLength(length: number){
    return (target:any, key: string) => {
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
            }else{
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}

class Api{
    @minLength(2)
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("32312");
console.log(api.name);