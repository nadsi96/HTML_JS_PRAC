package servlet;

import java.io.*;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import javax.servlet.jsp.PageContext;


@WebServlet(urlPatterns="/MyServlet1")
public class MyServlet1 extends HttpServlet{

	public void init(ServletConfig config) throws ServletException{
		System.out.println("init Servlet");
		super.init(config);
	}
	public void destroy() {
		System.out.println("destroy");
	}
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException{
		System.out.println("doGet");
		String item = req.getParameter("input");
		System.out.println(item);
	}
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException{
		System.out.println("doPost");
		String item = req.getParameter("in4");
		System.out.println(item);
		
		req.getSession().setAttribute("in4", item);
		res.sendRedirect("page3.jsp");
//		RequestDispatcher rd = req.getRequestDispatcher("/page3.jsp");
//		req.setAttribute("in4", item);
//		rd.forward(req,  res);
	}
	
}
