package hu.szte.prf.prfprojekt.models;


import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tranzakciok")
public class Tranzakcio {
    private int termekid;
    private int datum;
    private int osszeg;

    //private Termek termek;

    public Tranzakcio() {
    }

    public Tranzakcio(int termekid, int datum, int osszeg) {
        this.termekid = termekid;
        this.datum = datum;
        this.osszeg = osszeg;
    }

    public int getTermekId() {
        return termekid;
    }

    public void setTermekId(int termekid) {
        this.termekid = termekid;
    }

    public int getDatum() {
        return datum;
    }

    public void setDatum(int datum) {
        this.datum = datum;
    }

    public int getOsszeg() {
        return osszeg;
    }

    public void setOsszeg(int osszeg) {
        this.osszeg = osszeg;
    }

    @Override
    public String toString() {
        return "Tranzakcio [termekid=" + termekid + ", osszeg = " + osszeg + ", datum =" + datum + "]";
    }
}




