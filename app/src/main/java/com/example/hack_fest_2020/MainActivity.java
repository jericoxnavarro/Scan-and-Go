package com.example.hack_fest_2020;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;

import com.ismaeldivita.chipnavigation.ChipNavigationBar;

public class MainActivity extends AppCompatActivity {

    ChipNavigationBar chipNavigationBar;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        chipNavigationBar = findViewById(R.id.bottom_nav);
        chipNavigationBar.setItemSelected(R.id.dashboard, true);
        getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new dashboard_fragment()).commit();
        bottomMenu();

    }

    private void bottomMenu() {
            chipNavigationBar.setOnItemSelectedListener(new ChipNavigationBar.OnItemSelectedListener() {
                @Override
                public void onItemSelected(int i) {
                    Fragment fragment = null;
                    switch (i){
                        case    R.id.dashboard:
                             fragment = new dashboard_fragment();
                             break;
                        case    R.id.nav_manage:
                            fragment = new list_fragment();
                            break;
                        case    R.id.account:
                            fragment = new account_fragment();
                            break;


                    }
                    getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, fragment).commit();

                }
            });
    }
}