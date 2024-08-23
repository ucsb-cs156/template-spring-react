package edu.ucsb.cs156.example.models;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.AccessLevel;

/**
 * This is a model class that represents system information.
 * 
 * This class is used to provide information about the system to the frontend.
 */

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class SystemInfo {
  private Boolean springH2ConsoleEnabled;
  private Boolean showSwaggerUILink;
  private String oauthLogin;
}
