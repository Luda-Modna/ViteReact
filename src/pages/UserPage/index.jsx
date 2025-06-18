import React from "react";
import HeaderUserPage from "../../components/HeaderUserPage";
import FooterUserPage from '../../components/FooterUserPage'

function UserPage() {
  return (
    <div>
      <HeaderUserPage />
      <main>Main Content</main>
      <FooterUserPage />
    </div>
  );
}

export default UserPage;

