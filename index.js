class Masina {
    constructor(marca, model, cmc, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.cmc = cmc;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    get proprietati() {
        return `Masina[marca=${this.marca}, model=${this.model}, cnc=${this.cnc}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
    }
}

class MasinaDeCurse extends Masina {
    constructor(marca, model, culoare, kilometraj) {
        super(marca, model, null, culoare, kilometraj)
    }

    participaLaCampionat(pozitiaInCampionat) {
        if (pozitiaInCampionat > 0) {
            console.log(`Am castigat locul ${pozitiaInCampionat}`);
        } else {
            console.log("Nu am castigat niciun premiu");
        }
    }
}

function main() {
    const masina1 = new Masina("Audi", "A6", "2.7 TDI", "Purple", "280.000")
    const masina2 = new Masina("Toyota", "Supra", "3.0 T-Turbo", "Portocaliu", "300.000",)
    const masina3 = new Masina("Nissan", "Skyline", "GT-R R32", "Albastru", "200.000",)

    console.log(masina1.proprietati);
    console.log(masina2.proprietati);
    console.log(masina3.proprietati);

    const masinaDeCurse1 = new MasinaDeCurse("Mazda", "MX-5", "Rosu", "230.000")
    masinaDeCurse1.participaLaCampionat(5);

    const masinaDeCurse2 = new MasinaDeCurse(" Toyota", "GR86", "Gri", "260.000")
    masinaDeCurse1.participaLaCampionat(-1);

    const masinaDeCurse3 = new MasinaDeCurse("Lotus", "Emira", "Galben", "250.000")
    masinaDeCurse1.participaLaCampionat(3);

    // console.log(masinaDeCurse1.proprietati);
    // console.log(masinaDeCurse2.proprietati);
    // console.log(masinaDeCurse3.proprietati);
}

main();