public class HerenciaMascota extends Intermedio{
    //TODO Herencia

q
    public static void main(String[] args) {
        //TODO Polimorfismo
    
        Intermedio.AbsMascota Perro = new Intermedio.AbsMascota("Canino", "Blanco y Negro", "8");
        Perro.getNombre("Noa");
        System.out.println("Mi gato se llama: " + Perro.getNombre());

    }
}
