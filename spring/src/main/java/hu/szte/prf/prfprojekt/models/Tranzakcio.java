package hu.szte.prf.prfprojekt.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tranzakciok")
public class Tranzakcio {
    private int termekid;
    private int datum;
    private int osszeg;

}
