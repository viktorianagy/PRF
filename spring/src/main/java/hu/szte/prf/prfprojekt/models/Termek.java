package hu.szte.prf.prfprojekt.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "termekek")
public class Termek {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int id;

    private String nev;
    private int ar;

    public Termek() {
    }

    public Termek(int id, String nev, int ar) {
        this.id = id;
        this.nev = nev;
        this.ar = ar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNev() {
        return nev;
    }

    public void setNev(String nev) {
        this.nev = nev;
    }

    public int getAr() {
        return ar;
    }

    public void setAr(int ar) {
        this.ar = ar;
    }

    @Override
    public String toString() {
        return "Termek [ar=" + ar + ", id=" + id + ", nev=" + nev + "]";
    }
}
