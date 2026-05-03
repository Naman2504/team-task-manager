package com.naman.spring.taskmanager.TeamTaskManager.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET_KEY =
            "mysecretkeymysecretkeymysecretkey";

    // GENERATE TOKEN

    public String generateToken(String email) {

        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(new Date())

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60 * 24
                        )
                )

                .signWith(
                        SignatureAlgorithm.HS256,
                        SECRET_KEY
                )

                .compact();
    }

    // EXTRACT EMAIL

    public String extractEmail(String token) {

        return extractClaims(token)
                .getSubject();
    }

    // VALIDATE TOKEN

    public boolean validateToken(String token) {

        return extractClaims(token)
                .getExpiration()
                .after(new Date());
    }

    // EXTRACT CLAIMS

    private Claims extractClaims(String token) {

        return Jwts.parser()

                .setSigningKey(SECRET_KEY)

                .parseClaimsJws(token)

                .getBody();
    }
}
