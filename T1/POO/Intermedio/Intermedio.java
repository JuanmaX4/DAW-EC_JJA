public class Intermedio {
    
    private String nombre;
    private int patas;
    private int edad;
    private String especie;

    Intermedio() {}

    Intermedio(String nombre, int patas) {
        this.nombre = nombre;
        this.patas = patas;
    }
    
    Intermedio(String nombre, String especie, int edad) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }    

    //GETTERS & SETTERS
    public String getNombre(){ 
       return nombre;
    }
        
    public int getPatas(){ 
       return patas;
    }
        
    public void setNombre(String nuevoNombre){ 
        nombre = nuevoNombre;
    }
        
    public void setPatas(int numeroPatas){ 
        patas = numeroPatas;
    }

    //Clase Abstracta

    public static boolean respirar(boolean respiraccion){ 
        String respirar= "esta respirando";
        if (respiraccion) {
            System.out.println(respirar);
            return true;
        }else{
            System.out.println("respira bajo el agua porque es un pez");
            return false;
        }
    }
    // Poliformismo
    public String toString() {
        return "La mascota se llama "+getNombre()+" y tiene "+getPatas()+" Patas";
    }

    public static void main(String[] args) {
        //**-------------------------------------------------------------------------------- */    
        //TODO Encapsulamiento
            System.out.println("Encapsulamiento");
            Intermedio g = new Intermedio();
            g.setNombre("Luna");
            g.setPatas(4);
            System.out.println("Mi gato se llama: " + g.getNombre());
            System.out.println("El número de patas de mi gato es: " + g.getPatas());
        //**-------------------------------------------------------------------------------- */         
        //TODO Abstracción
            System.out.println(respirar(true));
        //**-------------------------------------------------------------------------------- */        
    }
}
