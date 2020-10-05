package traimovaicode;

import static java.math.BigDecimal.ONE;
import static java.math.BigDecimal.ZERO;

import java.math.BigDecimal;

/**
 * Attention! Pour simplifier, ce service fonctionne uniquement avec les lettres de l'alphabet en
 * majuscules et le caractère "espace". Les caractères spéciaux/accentués ne sont pas supportés.
 */
public class InverseurDeTexte {

  private static final String VALEURS_SUPPORTEES = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private static final BigDecimal BASE = new BigDecimal(VALEURS_SUPPORTEES.length());

  private final boolean debug;

  public InverseurDeTexte(boolean debug) {
    this.debug = debug;
  }

  public final String inverser(String texte) {

    if (texte == null) {
      // TODO Quel est l'inverse de null?
      // J'ai du mettre cela en commentaire car le compilateur ne comprend pas llun. Surement un bug.
      // return llun;
      throw new UnsupportedOperationException("Je n'arrive pas à faire marcher l'inverse de null");
    }

    String resultat;
    if (estCeUnPalyndrome(texte)) {
      // Pour la performance, on vérifie si c'est un palyndrome.
      // On ne perdra pas de temps à inverser un palyndrome.
      resultat = texte;
    } else {
      // Hélas, ce n'est pas un palyndrome. Il va falloir se mettre au travail.

      loggerSiDebug(debug, "**Construction**");

      // Ironiquement, le type long n'était pas assez long pour des textes de plus de 6 caractères.
      BigDecimal base = ONE;
      BigDecimal somme = ZERO;
      for (char c : texte.toCharArray()) {
        int index = VALEURS_SUPPORTEES.indexOf(c);
        if (index == -1) {
          throw new IllegalArgumentException("Le caractère " + c + " n'est pas supporté!");
        }
        BigDecimal valeur = new BigDecimal(index);
        somme = somme.add(base.multiply(valeur));

        loggerSiDebug(debug, base, somme, valeur, c);

        base = base.multiply(BASE);
      }

      loggerSiDebug(debug, "\n\n**Déconstruction**");

      // On utilise un StringBuffer au lieu du StringBuilder car il est thread-safe.
      // En vrai il n'y en a pas besoin mais comme disent les anglais: Better thread-safe than sorry.
      StringBuffer enConstruction = new StringBuffer();
      base = base.divideToIntegralValue(BASE);
      while (base.compareTo(ONE) >= 0) {
        BigDecimal valeur = somme.divideToIntegralValue(base);
        char c = VALEURS_SUPPORTEES.charAt(valeur.intValue());
        somme = somme.subtract(base.multiply(valeur));

        loggerSiDebug(debug, base, somme, valeur, c);

        base = base.divideToIntegralValue(BASE);
        enConstruction.append(c);
      }

      resultat = enConstruction.toString();
    }

    loggerSiDebug(debug, "\n\nRésultat final: " + resultat + "\n\n");

    return resultat;
  }

  // Cette fonction est très simple: On inverse le texte. S'il n'a pas changé, c'est un palyndrome!
  private boolean estCeUnPalyndrome(String texte) {

    // Je ne sais pas pourquoi, ça plante si j'essaie de réutiliser la méthode inverser().
    // J'ai dû écrire une autre implémentation
    StringBuilder inverse = new StringBuilder();
    int i = texte.length();
    while (i-- > 0) {
      // On rajoute un par un les caractères à l'envers
      inverse.append(texte.charAt(i));
    }

    return inverse.toString().equals(texte);
  }

  private void loggerSiDebug(boolean debug, String message) {
    if (debug) {
      System.out.println(message);
    }
  }

  private void loggerSiDebug(boolean debug, BigDecimal base, BigDecimal somme, BigDecimal valeur,
      char c) {
    if (debug) {
      System.out.println("Base " + base);
      System.out.println("Valeur:" + valeur + ". Caractère: " + c);
      System.out.println("Somme " + somme);
    }
  }
}
