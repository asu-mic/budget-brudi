import ContentWrapper from "../components/widgets/ContentWrapper";
import InputText from "../components/widgets/InputText";
import InputCollection from "../components/widgets/InputCollection";
import BbBtn from "../components/widgets/BbBtn";
import InputCurrency from "../components/widgets/InputCurrency";
import DrawerContainer from "../components/widgets/DrawerContainer";

function Profile(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("submit form profile");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContentWrapper>
          <InputText
            id="firstname"
            name="firstname"
            label="Personal Info"
            placeholder="First Name"
          />
          <InputText id="surname" name="surname" placeholder="Surname" />
          <InputText id="email" name="email" placeholder="Email" />
          <InputCollection>
            <InputText
              id="password"
              name="password"
              placeholder="Password"
              label="Password"
            />{" "}
            <InputText
              id="passwordrepeat"
              name="passwordrepeat"
              placeholder="Repeat Password"
            />
          </InputCollection>{" "}
        </ContentWrapper>
        <BbBtn content="Submit" />
      </form>
    </>
  );
}

export default Profile;
