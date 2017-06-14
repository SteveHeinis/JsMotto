function Vehicule(modele, kilometrage, moteur, couleur) {
	this.modele = modele;
    this.kilometrage = kilometrage;
	this.moteur = "12cv" || moteur;
	this.couleur = "white" || couleur;
	this.voyage = function(km) {
        this.kilometrage += km ;
	}
}

Porsche = new Vehicule ("Cayenne", 1200, "V8", "Black");
Porsche
Audi = new Vehicule ("Q5", 460);
Audi
Suzuki = new Vehicule ("Swift", 210, "12cv", "Yellow");
Suzuki
Dacia = new Vehicule ("Sandero", 1923);
Dacia
Tesla = new Vehicule ("S", 0, "539cv", "Grey");
Tesla