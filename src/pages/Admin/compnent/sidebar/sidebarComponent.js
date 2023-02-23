import styled from "styled-components";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 98%;
  margin: 5px 5px 5px 5px;
`;

export const Top = styled.div`
  height: 7.2%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(230, 227, 227);
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Logo = styled.h3`
  font-family: "Nunito", sans-serif;
  color: #6439ff;
`;

export const Center = styled.div`
  height: 85%;
  border-radius: 5px;
  border: 1px solid rgb(230, 227, 227);
  margin-bottom: 5px;
`;

export const LinkR = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 10px;
`;

export const DashIcon = styled(MdDashboardCustomize)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const Home = styled(AiFillHome)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const LiTitle = styled.li`
  font-family: "Nunito", sans-serif;
`;

export const Li = styled.li`
  margin-left: 1rem;
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  color: "#000";

  &:hover {
    transform: scale(1.1);
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const UserIcon = styled(FaUsersCog)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const ProIcon = styled(FaShopify)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const OrderIocn = styled(FaFileInvoiceDollar)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const UsefulContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const StatIcon = styled(FaChartBar)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const NotifIcon = styled(MdNotificationsActive)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const Setting = styled(AiFillSetting)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const Profile = styled(RiProfileLine)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const Logout = styled(RiLogoutBoxRLine)`
  font-size: 1rem;
  margin-right: 10px;
  color: #6439ff;
`;

export const Bottom = styled.div`
  border: 1px solid rgb(230, 227, 227);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.2%;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const White = styled.button`
  margin: 0 10px;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  border: none;
  color: black;
  background-color: whitesmoke;
  font-weight: 800;
  cursor: pointer;
  border: 0.5px solid black;
`;

export const Black = styled.button`
  margin: 0 10px;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  border: 0.5px solid white;
  color: white;
  background-color: black;
  font-weight: 800;
`;
