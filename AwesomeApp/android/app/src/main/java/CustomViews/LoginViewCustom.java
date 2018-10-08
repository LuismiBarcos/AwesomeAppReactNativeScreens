package CustomViews;

import android.animation.ArgbEvaluator;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.TransitionDrawable;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.widget.Button;
import android.widget.EditText;

import com.awesomeapp.R;
import com.liferay.mobile.screens.auth.login.LoginScreenlet;
import com.liferay.mobile.screens.viewsets.defaultviews.auth.login.LoginView;

public class LoginViewCustom extends LoginView {

    private LoginScreenlet screenlet;
    private EditText emailAddress;
    private EditText password;
    private Button loginButton;

    private final String WHITE = "#ffffff";
    private final String BLUE = "#157EFB";

    public LoginViewCustom(Context context) {
        super(context);
    }

    public LoginViewCustom(Context context, AttributeSet attributes) {
        super(context, attributes);
    }

    public LoginViewCustom(Context context, AttributeSet attributes, int defaultStyle) {
        super(context, attributes, defaultStyle);
    }

    @Override
    protected void onFinishInflate() {
        super.onFinishInflate();
        this.emailAddress = findViewById(R.id.liferay_login);
        this.password = findViewById(R.id.liferay_password);
        this.loginButton = findViewById(R.id.liferay_login_button);
        disableLoginButton();
        addTextListenerToEmailAddress();
        addTextListenerToPassword();
    }

    private void addTextListenerToEmailAddress() {
        this.emailAddress.addTextChangedListener(new TextChangeListener());
    }

    private void addTextListenerToPassword() {
        this.password.addTextChangedListener(new TextChangeListener());
    }


    private boolean oneFieldIsEmpty() {
        return this.emailAddress.getText().toString().isEmpty()
                || this.password.getText().toString().isEmpty();
    }

    private void disableLoginButton() {
        loginButton.setEnabled(false);
        loginButton.setBackgroundColor(Color.parseColor(this.BLUE));
        loginButton.setTextColor(Color.parseColor(this.WHITE));
        loginButton.setAlpha((float) 0.5);
    }

    private void enableLoginButton() {
        loginButton.setEnabled(true);
        loginButton.setBackgroundColor(Color.parseColor(this.BLUE));
        loginButton.setTextColor(Color.parseColor(this.WHITE));
        loginButton.setAlpha(1);
    }

    private class TextChangeListener implements  TextWatcher {

        @Override
        public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) { }

        @Override
        public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            if(oneFieldIsEmpty()) {
                disableLoginButton();
            } else {
                enableLoginButton();
            }
        }

        @Override
        public void afterTextChanged(Editable editable) { }
    }
}
