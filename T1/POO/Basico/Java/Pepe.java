package Java;

class Pepe{

    public String nombreAnimal;
    public String especie;
    public int edad;

    Pepe(){

    }

    Pepe(String nombreAnimal, String especie, int edad){
        this.nombreAnimal=nombreAnimal;
        this.especie=especie;
        this.edad=edad;
    }

    public String getNombreAnimal() {
        return nombreAnimal;
    }

    public String getEspecie() {
        return especie;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public void setNombreAnimal(String nombreAnimal) {
        this.nombreAnimal = nombreAnimal;
    }
    
    @Override
    public String toString() {        
        return "Animal pertenece a la especie: "+getEspecie()+" y su nombre es: "+getNombreAnimal()+" y su edad es:" +getEdad();
    }
}