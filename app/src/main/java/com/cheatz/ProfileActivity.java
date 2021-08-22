package com.cheatz;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.google.firebase.firestore.DocumentChange;
import com.google.firebase.firestore.EventListener;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;
import com.google.firebase.firestore.QuerySnapshot;
import java.util.ArrayList;
import java.util.List;


public class ProfileActivity extends AppCompatActivity {

    ImageView info;
    TextView infotextview;
    private Selectorrecycleradapter notificationsAdapterx;
    private List<Selectormodel> NotifListx;
    FirebaseFirestore firestore;
    ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        firestore = FirebaseFirestore.getInstance();
        info=findViewById(R.id.imageView);
        progressBar=findViewById(R.id.progressBar);
        progressBar.setVisibility(View.VISIBLE);
        info.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ProfileActivity.this, InfoActivity.class);
                startActivity(intent);
            }
        });
        infotextview=findViewById(R.id.textView);
        infotextview.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ProfileActivity.this, InfoActivity.class);
                startActivity(intent);
            }
        });
        Bundle bundle1 = getIntent().getExtras();
        if (bundle1 != null)
        {
           String branchname = bundle1.get("branchname").toString();
           String moduels = bundle1.get("moduels").toString();
           String year = bundle1.get("year").toString();
           String subbranch = bundle1.get("subbranch").toString();
           NotifListx = new ArrayList<>();
           RecyclerView notificationList = findViewById(R.id.selectsemrecycler);
           notificationsAdapterx = new Selectorrecycleradapter(NotifListx,branchname,year,subbranch);
           notificationList.setHasFixedSize(true);
           notificationList.setDrawingCacheEnabled(true);
           notificationList.setItemAnimator(null);
           notificationList.setNestedScrollingEnabled(false);
           notificationList.setLayoutManager(new LinearLayoutManager(this));
           notificationList.setAdapter(notificationsAdapterx);
           firestore.collection(branchname+subbranch+year+"Sem").addSnapshotListener(this, new EventListener<QuerySnapshot>() {
                @Override
                public void onEvent(QuerySnapshot documentSnapshots, FirebaseFirestoreException e) {
                    for(DocumentChange doc: documentSnapshots.getDocumentChanges()) {
                        Selectormodel notifications = doc.getDocument().toObject(Selectormodel.class);
                        NotifListx.add(notifications);
                        notificationsAdapterx.notifyDataSetChanged();
                        progressBar.setVisibility(View.INVISIBLE);
                    }
                }
            });
        }
    }
}