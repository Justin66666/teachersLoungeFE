import { StyleSheet } from "react-native";

const UI_Colors = {
  blue: "#6382E8",
  white: "#FFFFFF",
  light_blue: "#e7ecfe",
  light_blue_selected: "#b7bccb"
};
const App_StyleSheet = StyleSheet.create({
  invert: {
    backgroundColor: UI_Colors.light_blue,
    color: UI_Colors.blue
  },
  content: {
    paddingTop: 15,
  },
  list_item: {
    padding: 15,
    width: "90%",
    backgroundColor: UI_Colors.white,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 15,
    color: "black,"
  },
  list_message: {
    textAlign: "center",
    paddingTop: 200,
  },
  search: {
    backgroundColor: UI_Colors.white,
    width: "90%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15
  },
  header_button: {
    marginRight: 15,
    padding: 5,
  },
  header_icon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  header_button_text: {
    backgroundColor: UI_Colors.white,
    borderRadius: 10,
    padding: 5
  },


  // OLD STYLES

  register_signIn_background: {
    height: "100%",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: UI_Colors.white,
  },
  logoStyle: {
    resizeMode: "contain",
    height: "40%",
    alignSelf: "center",
    paddingLeft: 40,
    marginBottom: 20
  },
  text: {
    color: UI_Colors.white,
    fontSize: 20,
  },
  textBlock: {
    height: 40,
    margin: 5,
    marginTop: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: UI_Colors.blue,
    backgroundColor: UI_Colors.white,
  },
  postTextInput: {
    backgroundColor: UI_Colors.white,
    fontSize: 16,
  },
  block: {
    height: "50%",
    width: "60%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignContent: "center",
  },
  logout_section: {
    marginTop: "30%",
    fontSize: 24,
    height: 100,
    textAlign: "center",
  },
  moderation_view: {
    padding: 10,
  },
  // Used for community selection
  community_list: {
    marginRight: "1%",
    marginLeft: "1%",
    marginBottom: "1%",
  },
  community_label: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: UI_Colors.white,
  },
  //Currently used for register & signIn pages
  default_button: {
    width: "100%",
    height: "10%",
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: UI_Colors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
  small_button: {
    marginTop: 10,
    marginLeft: "5%",
    width: "40%",
    height: 40,
    borderRadius: 30,
    backgroundColor: UI_Colors.blue,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  medium_button: {
    marginTop: 10,
    marginLeft: "10%",
    marginRight: "10%",
    width: "80%",
    height: 40,
    borderRadius: 30,
    backgroundColor: UI_Colors.blue,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  //Used in friends, message, and postlistings Views
  large_button: {
    width: "94%",
    height: 80,
    marginTop: 10,
    borderRadius: 40,
    backgroundColor: UI_Colors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    marginBottom: 10,
    marginLeft: "3%",
    marginRight: "3%",
  },


  //Search Bar for Friends Search
  searchContainer: {
    flex: 1,
  },
  searchButtonContainer: {
    flex: 1,
  },
  searchBar: {
    height: 50,
    width: "97%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: UI_Colors.blue,
    flexDirection: "row",
    marginTop: 2,
    marginHorizontal: 5,
  },
  // search: {
  //   height: "100%",
  //   width: "90%",
  //   justifyContent: "center",
  //   alignContent: "center",
  //   alignItems: "center",
  //   fontSize: 20,
  //   padding: 10,
  // },
  searchButton: {
    height: 40,
  },
  //Profile View page
  profile_padding: {
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  profile_avatarImage: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "black",
  },
  profile_userNameStyle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 30,
    paddingHorizontal: 30,
    color: UI_Colors.blue,
  },
  profile_button: {
    marginTop: 5,
    height: "15%",
    width: "50%",
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: UI_Colors.blue,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  //Resource View
  resource_backGround: {
    backgroundColor: "#fef3d7",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  resource_cardTitle: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "#fef3d7",
  },
  resource_button: {
    width: "90%",
    height: "12.5%",
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: "#411c00",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    alignSelf: "center",
  },
  resournce_post: {
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#411c00",
    margin: 3,
    borderRadius: 15,
    paddingBottom: 20,
    fontSize: 20,
  },
  //ModeratorView
  moderator_button: {
    marginTop: 5,
    width: "60%",
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "#411c00",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  moderator_userText: {
    marginTop: 3,
    color: "#411c00",
    fontSize: 25,
  },
  //FriendView
  friend_userNameStyle: {
    fontSize: 36,
    fontWeight: "bold",
    color: UI_Colors.blue,
  },
  friend_info_padding: {
    paddingVertical: 20,
  },
  friend_info_text: {
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 3,
  },
  friends_list_header: {
    fontSize: 24,
    marginVertical: 10,
    color: UI_Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  friends_list_block: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: UI_Colors.blue,
    borderRadius: 5,
    borderColor: UI_Colors.blue,
    borderWidth: 1,
  },
  // User listings
  user_listings_post: {
    width: "97%",
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: UI_Colors.light_blue,
    marginBottom: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: UI_Colors.blue,
    paddingBottom: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 3,
  },
  user_listings_post_selected: {
    backgroundColor: UI_Colors.light_blue_selected,
  },
  user_listings_user: {
    color: "black",
    fontSize: 20,
  },
  user_listings_sub: {
    color: "black",
    fontSize: 10,
  },
  user_listings_info: {
    left: 5,
  },
  user_listings_header: {
    left: 10,
    top: 10,
    flexDirection: "row",
  },
  user_listings_profilePic: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },

  //ConversationView
  createConvo_button: {
    marginTop: 30,
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: 30,
    width: "60%",
    height: 50,
    borderRadius: 30,
    backgroundColor: UI_Colors.blue,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  createConvo_button_text: {
    color: "black",
    fontSize: 20
  },

  // Social Login Styles
  socialLoginContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  socialLoginText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: UI_Colors.blue,
    borderRadius: 30,
    width: '100%',
    height: 45,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  socialButtonText: {
    color: UI_Colors.white,
    fontSize: 16,
    marginLeft: 10,
  },
  appleButton: {
    width: '100%',
    height: 45,
    marginBottom: 10,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    color: '#555',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  // LinkedIn WebView Modal styles
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: UI_Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseText: {
    color: UI_Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // 2FA Styles
  twoFactorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: UI_Colors.blue,
    textAlign: 'center',
    marginBottom: 10,
  },
  twoFactorSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 2,
    borderColor: UI_Colors.blue,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: UI_Colors.white,
    color: 'black',
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  resendText: {
    color: UI_Colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendTimerText: {
    color: '#666',
    fontSize: 16,
  },
  
  // 2FA Toggle Styles
  twoFAToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  twoFAToggleText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default App_StyleSheet;
