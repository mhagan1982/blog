
package com.jamesonnetworks.blog.domain.entry;

import java.util.List;

public class Sections{
   	private List<Contents> contents;
   	private String title;

 	public List<Contents> getContents(){
		return this.contents;
	}
	public void setContents(List<Contents> contents){
		this.contents = contents;
	}
 	public String getTitle(){
		return this.title;
	}
	public void setTitle(String title){
		this.title = title;
	}
}
