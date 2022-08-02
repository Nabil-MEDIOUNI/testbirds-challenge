import styled from 'styled-components';

export const TeamListContainer = styled.div`
  max-width: 600px;
  box-shadow: 0px 0px 5px #dedede;
  width: 100%;
  height: auto;
  background-color: #fff;
  border-top: 3.5px solid #009b4b;
  border-radius: 3px;
  padding-bottom: 16px;
  @media (max-width: 920px) {
    width: 80%;
    margin: 16px 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 20px 20px 0 20px;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 20px;
`;

export const TeamListTitle = styled.h4`
  color: #52565e;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
  line-height: 1;
  @media (max-width: 920px) {
    margin-bottom: 16px;
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 28px 16px 10px;
  cursor: pointer;
  :hover {
    background-color: rgb(232 248 255);
  }
`;

export const MemberCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 40px 16px 10px;
  width: 41%;
  :hover {
    background-color: rgb(232 248 255);
  }
  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const AutocompleteContainer = styled.div`
  width: 48%;
  margin-left: 10px;
  margin-right: 0.5px;
  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const ListItemTypography = styled.p`
  font-size: 14px;
  margin: 0;
  color: #009b4b;
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #b9ffb9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const SelectImage = styled.img`
  width: 45px;
  border-radius: 50%;
`;

export const ClearImageContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0.5px solid red;
  color: red;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShowAllContainer = styled.div`
  width: 100%;
  height: 45px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: -16px;
  :hover {
    background-color: rgb(232 248 255);
  }
`;

export const RoleTypography = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const ClientNameTypography = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding-top: 8px;
`;

export const Typography = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const LoadingContainer = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.h2`
  text-align: center;
`;
