/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testing;

import entity.Assignment;
import entity.Solution;
import facade.AssignmentFacade;
import facade.SolutionFacade;
import facade.UserFacade;
import java.math.BigDecimal;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author PeterBoss
 */
public class TestMain {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Persistence.generateSchema("myPU", null);
//        EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPU");
//
//        UserFacade uf = new UserFacade();
//        AssignmentFacade af = new AssignmentFacade();
//        SolutionFacade sf = new SolutionFacade();
//
//        uf.addEntityManagerFactory(emf);
//        af.addEntityManagerFactory(emf);
//        sf.addEntityManagerFactory(emf);
//        
//        EntityManager em = emf.createEntityManager();
//        
//        
//        List<Assignment> a1= af.getAssignmentByRating((1.9f));
//        List<Assignment> a2= af.getAssignmentsInRange(1.9f, 2.7f);
//        
//        for(Assignment a : a1){
//            System.out.println(a.getId());
//        }

    }

}
