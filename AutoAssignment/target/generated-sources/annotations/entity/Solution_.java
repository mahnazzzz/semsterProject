package entity;

import entity.Assignment;
import entity.SolutionPK;
import entity.User;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-09-29T10:42:46")
@StaticMetamodel(Solution.class)
public class Solution_ { 

    public static volatile SingularAttribute<Solution, Date> timeSpent;
    public static volatile SingularAttribute<Solution, Assignment> assignment;
    public static volatile SingularAttribute<Solution, Float> rating;
    public static volatile SingularAttribute<Solution, SolutionPK> solutionPK;
    public static volatile SingularAttribute<Solution, User> user;
    public static volatile SingularAttribute<Solution, Integer> numberOfErrors;

}