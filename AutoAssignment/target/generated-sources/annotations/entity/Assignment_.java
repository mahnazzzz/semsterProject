package entity;

import entity.Solution;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-09-29T10:42:46")
@StaticMetamodel(Assignment.class)
public class Assignment_ { 

    public static volatile CollectionAttribute<Assignment, Solution> solutionCollection;
    public static volatile SingularAttribute<Assignment, Float> rating;
    public static volatile SingularAttribute<Assignment, Integer> id;

}