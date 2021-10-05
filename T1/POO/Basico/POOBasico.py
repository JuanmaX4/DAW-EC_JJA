class Persona:
  def __init__(self, personaNombre, personaEdad):
    self.personaNombre = personaNombre
    self.personaEdad = personaEdad

p1 = Persona("Juan", 45)

print(p1.personaNombre)
print(p1.personaEdad)

class Mascota(object):
    def __init__(self, nombre, especie):
        self.nombre = "Luna"
        self.especie = "Gato"

    def getNombre(self):
        return self.nombre

    def getEspecie(self):
        return self.especie

    def __str__(self):
        return "Es de %s" % (p1.personaNombre) % "%s es un %s" % (self.nombre, self.especie)

m2 = Mascota("Luna", "Gato")

print(m2.nombre, m2.especie)
