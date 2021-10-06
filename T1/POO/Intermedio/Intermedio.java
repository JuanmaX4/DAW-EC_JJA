public class Intermedio {
    
    private String nombre;
    private int patas;
    
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
    public abstract class AbsMascota {
        public String especie;
        public String color;
        public int edad;
    }

    //? Polimorfimos

    public void hablar(){

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
    }
}
