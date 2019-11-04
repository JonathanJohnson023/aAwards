![upload_photo](app/assets/images/take2-of-logo.png)


a/Awards is a website sharing social platform used to display, browse, discuss a corporation/personal website and creations. a/Awards is a near pixel-perfect clone of Awwwards.com but instead used to showcase my colleagues and associates I have had the honor of working with.

## Technologies
* [React](https://reactjs.org/) / [Redux](https://redux.js.org/) / [JavaScript](https://www.javascript.com/): Framework
* [Ruby on Rails](https://rubyonrails.org/): Backend
* [PostgreSQL](https://www.postgresql.org/) and [AWS](https://aws.amazon.com/): Database / User Storage / File upload
  
<div><img src="https://github.com/JonathanJohnson23/aAwards/blob/master/take2.gif" alt="Demo" /></div>

The modal is a functional component that receives props through dispatch requests. It overlays the website and displays either signup or login and can swap between the two. Other components can dispatch an action with the props "signup" or "login," and the modal will then load the proper component depending on those props.

```js
function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}
```
<div><img src="https://github.com/JonathanJohnson23/aAwards/blob/master/take1.gif" alt="Demo" /></div>

The user model is the core of the functionality for **authentication** and **bootstrapping** the user. By adding a session token to cookies and allowing token lookup, it provides seamless and secure login and bootstrap

```ruby
def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
 end

 def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
 end

 def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
 end

 def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
 end
```
<div><img src="https://github.com/JonathanJohnson23/aAwards/blob/master/take0.gif" alt="Demo" /></div>

  
<h2>Author</h2>
Jonathan Johnson
email: @JonathanJohnson023@gmail.com
