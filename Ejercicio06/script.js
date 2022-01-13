let escalera = {
    escalon: 0,
    subir() {
        this.escalon++;
        return this;
    },
    bajar() {
        this.escalon--;
        return this;
    },
    porDondeVoy() {
        alert(this.escalon);
        return this;
    }
}
escalera.subir().subir().bajar().subir().bajar().porDondeVoy(); // 1