/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import entity.User;
import facade.UserFacade;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Peter
 */
@Path("db")
public class DatabaseResource {

    UserFacade uf = new UserFacade();
    Gson gson = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of DatabaseResource
     */
    public DatabaseResource() {
        uf.addEntityManagerFactory(Persistence.createEntityManagerFactory("myPU"));
    }

    /**
     * Retrieves representation of an instance of entity.DatabaseResource
     *
     * @param min
     * @param max
     * @return an instance of java.lang.String
     */
    @GET
    @Path("user/range/{min}/{max}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsersInRange(@PathParam("min") float min, @PathParam("max") float max) {
        List<User> users = uf.getUsersInRange(min, max);
        return Response.status(200).entity(gson.toJson(users)).build();
    }

    @GET
    @Path("user/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllUsers() {
        List<User> users = uf.getUsersInRange(0, 10);
        return Response.status(200).entity(gson.toJson(users)).build();
    }

    @GET
    @Path("user/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("id") int id) {
        User user = uf.getUser(id);
        return Response.status(200).entity(gson.toJson(user)).build();
    }
    @GET
    @Path("user/name/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUserByName(@PathParam("name") String name) {
        User user = uf.getUser(name);
        if(user== null){return Response.status(404).build();}
        return Response.status(200).entity(gson.toJson(user)).build();
    }
    
    @POST
    @Path("user")
    @Produces(MediaType.APPLICATION_JSON)
    public Response addUser(String content){
        JsonObject input = new JsonParser().parse(content).getAsJsonObject();
        String name = input.get("name").getAsString();
        User user = uf.getUser(name);
        if(user==null){user= new User();
        user.setName(name);
        uf.addUser(user);
        return Response.status(200).build();
        }
        else{return Response.status(400).build();}
       
    }
    

    /**
     * PUT method for updating or creating an instance of DatabaseResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_XML)
    public void putXml(String content) {
    }
}
