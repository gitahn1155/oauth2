<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Models\User;
use Carbon\Carbon;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB; //query builder
use Illuminate\Support\Facades\Auth; //
use Illuminate\Support\Facades\Hash; //

class AuthController extends BaseController
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
      
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){

            $validator = Validator::make($request->all(), [
                'user_id' => 'required',
                'password' => 'required|string|min:6',
            ]);

   
           $credentials = request(['user_id', 'password']); //아이디, 비번 property에 저장
           $token = Auth::attempt($credentials); //로그인 성공시 token 생성

   
           if (!$token) { //토큰 생성
                //인증되지 않았으면 401 에러
               return response()->json(['success' => 'false'], 401);
           }
   
           return $this->createNewToken($token);
    }


    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {

        $request->user_id = $request->phone;
        $request->password = $request->birth;
        $request->password_confirmation = $request->birth;
        $validator = Validator::make($request->all(), [
            'phone' => 'required|string|between:2,100',
            'birth' => 'required|string|between:2,100',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                "status" => false,
                "errors" => $validator->errors()
            ), 400);
        }


        $user = array();
        $user['user_id'] = $request->user_id;
        $user['phone'] = $request->user_id;
        $user['name'] = $request->name;
        $user['birth'] = $request->password;
        $user['address_detail'] = $request->address_detail;
        $user['password'] = Hash::make($request->password);
        $user['gender'] = $request->gender;
        $user['user_role'] = $request->role;
        $user['created_at'] = Carbon::now();

        DB::table('users')->insert($user);

        //return $this->login($request);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout(true);
        return response()->json(['success'=>true], 200);
    }

    public function checkToken() {
        return response()->json(['success' => true], 200);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        if(auth()->user()) {
            return $this->createNewToken(auth()->refresh());
        } else {
            return response()->json(['success' => false, 'message'=> 'User is not Authenticated', 401]);
        }
        
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'name' => auth()->user()->name,
            'id' => auth()->user()->id,
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

}
