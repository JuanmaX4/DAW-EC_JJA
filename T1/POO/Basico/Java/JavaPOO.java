package T1.POO.Basico.Java;

class JavaPOO{

    String nombreAnimal;
    String especie;
    int edad;

    JavaPOO(){

    }

    JavaPOO(String nombreAnimal, String especie, int edad){
        this.nombreAnimal=nombreAnimal;
        this.especie=especie;
        this.edad=edad;
    }

    //? TODO GETTER's
    public String getNombreAnimal() {
        return nombreAnimal;
    }

    public String getEspecie() {
        return especie;
    }

    public int getEdad() {
        return edad;
    }

    //TODO SETTER's

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public void setNombreAnimal(String nombreAnimal) {
        this.nombreAnimal = nombreAnimal;
    }

    //? TO String

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        
        return "Animal pertenece a la especie: "+getEspecie()+" y su nombre es: "+getNombreAnimal()+" y su edad es:" +getEdad();
    }
}