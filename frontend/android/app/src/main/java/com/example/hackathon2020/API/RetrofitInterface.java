package com.example.hackathon2020.API;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.POST;

public interface RetrofitInterface {

    @POST("business")
    Call<LoginResult> userLogin(@Body HashMap<String, String> businessID);
}
