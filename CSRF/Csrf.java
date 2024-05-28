import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.security.SecureRandom;

@WebServlet("/Csrf")
public class Csrf extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // CSRF 토큰 생성
        HttpSession session = request.getSession();
        if (session.getAttribute("csrf_token") == null) {
            String csrfToken = generateCsrfToken();
            session.setAttribute("csrf_token", csrfToken);
        }
        response.getWriter().write((String) session.getAttribute("csrf_token"));
    }

    private static String generateCsrfToken() {
        SecureRandom random = new SecureRandom();
        byte[] bytes = new byte[32];
        random.nextBytes(bytes);
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
}
