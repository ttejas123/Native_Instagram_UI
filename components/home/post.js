import React, {useState, useEffect} from 'react'

import {
  StyleSheet,
  View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { Divider } from 'react-native-elements'
import { POST } from './data.js'
import PostHeader from './postHeader.js'
import PostBottom from './postBottom.js'

const post = () => {
	const [comnt, setcomnt] = useState(false);
    return (
      <View style={styles.container}>
      	{/*<Divider width={1} orientation='vertical' />*/}
      	
      	{
      			POST.map((val, index) => {
      			return (
      					<View key={index}>
      						<PostHeader img={val.profile} name ={val.user} />
      						<PostBody img={val.imageUrl} />
      						<PostBottom img={val.profile} name = {val.user} />
      						<View style={{marginLeft: 7, marginBottom: 9}}>
      							<Likes post={val}/>
      							<Caption post={val}/>
      							{comnt ? <Comment setcomnt={setcomnt} comnt={comnt} post={val} /> : <CommentsSection setcomnt={setcomnt} comnt={comnt} post={val} />}
      						</View>
      					</View>

      				)
      		})
      	}
      	
      </View>
    );
}

const Likes = (props) => {
	return (
		<View>
			
			<Text style={{color: 'white', fontWeight: '600'}}>{props.post.likes.toLocaleString('en')} likes</Text>
		</View>
	);
}

const Caption = (props) => {
	return (
		<View style={{marginTop: 3}}>
			
			<Text style={{flexDirection: 'row'}}> 
				<Text style={{color: 'white', fontWeight: '600'}}>{props.post.user}</Text>
				<Text style={{color: 'white'}}> {props.post.caption}</Text>
			</Text>
		</View>
	);
}

const CommentsSection = ({post, setcomnt, comnt}) => {
	return (
		<TouchableOpacity onPress={() => {
			setcomnt(!comnt);
		}}>
			{!!post.comments.length &&(<Text style={{color: 'gray', marginTop: 3}}>
				View {post.comments.length > 1 ? 'All' : ''} {post.comments.length > 1 ? <Text>{post.comments.length} Comments</Text> : '1 Comment'}
			</Text>)}
		</TouchableOpacity>
		);
}

const Comment= ({post, setcomnt, comnt}) => {
	return (
		<>
			{post.comments.map((comt,index) => {
				return(
					<Text key={index} style={{color: 'white', marginTop: 3}}>
						<Text style={{fontWeight: 'bold'}}>{comt.user}</Text>{'  '}
						{comt.comment}
					</Text>
				)
			})}
			<TouchableOpacity onPress={() => {
				setcomnt(!comnt);
			}}> 
				<Text style={{color: 'gray'}}>Hide Comments</Text>
			</TouchableOpacity>
		</>
		);
}

const PostBody = (props) => {

	  const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const [imageLoading, setImageLoading] = useState(true)

    useEffect(() => {
        Image.getSize(props.img, (width, height) => {
           	if(height <= 450)
            	setHeight(height)
            
            if(height > 450)
            	setHeight(450)
            setImageLoading(false)
        }, (error) => {
            console.log("ScaledImage,Image.getSize failed with error: ", error)
        })
    }, [])

	return (
									<View style={{width :'100%', height: height}}>
      							<Image style={styles.logo} source={{uri: props.img}} />
      						</View>
		)
}

const styles = StyleSheet.create({
	text:{
		color: 'white'
	},
	logo: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	},
	container:{
		// alignItems: 'center',
		marginTop : 3,
		marginBottom: 15
	}
});


export default post;