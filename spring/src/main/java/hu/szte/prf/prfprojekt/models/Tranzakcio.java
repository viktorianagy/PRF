package hu.szte.prf.prfprojekt.models;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tranzakciok")
public class Tranzakcio {
    private int id;
    private int termekid;
    private int datum;
    private int osszeg;


    public Tranzakcio() {
    }

    public Tranzakcio(int id, int termekid, int datum, int osszeg) {
        this.id = id;
        this.termekid = termekid;
        this.datum = datum;
        this.osszeg =  0;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public void setOsszeg(List<Termek> termekek) {
        this.osszeg = 0;
        for(Termek termek: termekek) {
            osszeg = osszeg + termek.getAr();
        }
    }

    @Override
    public String toString() {
        return "Tranzakcio [termekid=" + termekid + ", osszeg = " + osszeg + ", datum =" + datum + "]";
    }
}




