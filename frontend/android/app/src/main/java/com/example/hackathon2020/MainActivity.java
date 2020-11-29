package com.example.hackathon2020;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    ImageView image_scan, image_list, image_account, image_about;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Scan Class
        image_scan = (ImageView) findViewById(R.id.scan);
        image_scan.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mainIntent = new Intent(getApplicationContext(),
                        Scanner.class);
                startActivity(mainIntent);
                finish();
            }
        });

        //List Class
        image_list = (ImageView) findViewById(R.id.image_list);
        image_list.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mainIntent = new Intent(getApplicationContext(),
                        List.class);
                startActivity(mainIntent);
                finish();
            }
        });

        //Account Class
        image_account = (ImageView) findViewById(R.id.account);
        image_account.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mainIntent = new Intent(getApplicationContext(),
                        Account.class);
                startActivity(mainIntent);
                finish();
            }
        });
        //About Class
        image_about = (ImageView) findViewById(R.id.about);
        image_about.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mainIntent = new Intent(getApplicationContext(),
                        About.class);
                startActivity(mainIntent);
                finish();
            }
        });
    }
}