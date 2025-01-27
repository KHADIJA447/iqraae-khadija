#include <stdio.h>
void compteur() {
    static int count = 0; // Initialisée à 0 une seule fois
    count++;             // Incrémentée à chaque appel
    printf("Count = %d\n", count);
}

int main() {
    compteur(); // Affiche "Count = 1"
    compteur(); // Affiche "Count = 2"
    compteur(); // Affiche "Count = 3"
    return 0;
}
